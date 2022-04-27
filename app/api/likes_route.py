from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Comment, User, Post, db, Like

like_routes = Blueprint('likes', __name__)

@like_routes.route('/')
def get_likes():
    likes = Like.query.all()
    return {'likes': [like.to_dict() for like in likes]}

@like_routes.route('/', methods=['POST'])
def add_like():
    like = Like()
    likes = request.get_json()
    like.user_id = likes['user_id']
    like.post_id = likes['post_id']

    db.session.add(like)
    db.session.commit()
    return like.to_dict()

@like_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_like(id):
    delete_like = Like.query.get(id)
    db.session.delete(delete_like)
    db.session.commit()
    return { 'message': "Success" }
