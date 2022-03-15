from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Post
from datetime import datetime

post_routes = Blueprint('posts', __name__)

@post_routes.route('/')
def get_posts():

    posts = Post.query.all()
    return {'posts': [post.to_dict() for post in posts]}

@post_routes.route('/new', methods=['POST'])
def create_post():
    form = PostForm()
