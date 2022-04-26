from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import User

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def get_users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

@user_routes.route('/<int:id>')
def get_user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/search', methods=['PUT'])
def search():
    data = request.get_json('input')

    users = User.query.filter(User.username.ilike(f'${data}'), User.username != current_user.username).all()
    return {'users': [user.to_dict() for user in users]}
