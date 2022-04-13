from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Post
from app.forms import PostForm
from app.aws_s3 import (upload_file_to_s3, allowed_file, get_unique_filename)

post_routes = Blueprint('posts', __name__)

@post_routes.route('/')
def get_posts():

    posts = Post.query.all()
    return {'posts': [post.to_dict() for post in posts]}

@post_routes.route('/<int:id>')
def get_single_post(id):
    post = Post.query.get(id)
    return post.to_dict()

@post_routes.route('/new', methods=['POST'])
def create_post():

    if "image" not in request.files:
        return {"errors": ["Error: Image required"]}, 400
    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": ["Error: file type not permitted"]}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)


    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request

    print('111111')

    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_post = Post(
            user_id = current_user.id,
            image = url,
            description = form.data['description'],
        )
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict()
    return {'message': 'Success'}

@post_routes.route('/<int:id>/edit', methods=['PUT'])
def edit_post(id):
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit = Post.query.get(id)
        edit.user_id = current_user.id
        edit.image = form.data['image']
        edit.description = form.data['description']
        db.session.commit()
        return edit.to_dict()
    return {'message':'Success'}

@post_routes.route('/delete/<int:id>', methods=["DELETE"])
def delete_post(id):
    delete = Post.query.get(id)
    db.session.delete(delete)
    db.session.commit()
    return {'message': 'Success'}
