from hashlib import new
from flask import Blueprint, request
from flask_login import current_user
from app.forms.create_comment_form import CommentForm
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def get_comments():

    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/new', methods=['POST'])
def create_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment(
            user_id = current_user.id,
            post_id = form.data['post_id'],
            comment = form.data['comment']
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {'message': 'Success'}

@comment_routes.route('/<int:id>/edit', methods=['PUT'])
def edit_comments(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit = Comment.query.get(id)
        edit.user_id = current_user.id
        edit.post_id = form.data['post_id']
        edit.comment = form.data['comment']
        db.session.commit()
        return edit.to_dict()
    return {'message': 'success'}

@comment_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete_post(id):
    delete = Comment.query.get(id)
    db.session.delete(delete)
    db.session.commit()
    return {'message': 'success'}
