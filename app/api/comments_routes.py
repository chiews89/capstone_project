from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Comment
from app.forms import PostForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def get_comments():

    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

# @comment_routes.route('/new', methods=['POST'])
# def create_comment()
