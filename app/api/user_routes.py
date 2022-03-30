from flask import Blueprint
from flask_login import login_required, current_user
from app.models import User

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def get_users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}
