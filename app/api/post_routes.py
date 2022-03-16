from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Post
from datetime import date, datetime
from app.forms import PostForm

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
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_post = Post(
            user_id = current_user.id,
            image_url = form.data['image_url'],
            description = form.data['description'],
        )
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict()
    return {'message': 'Success'}

