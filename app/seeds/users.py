from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='Marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='Bobbie', email='bobbie@aa.io', password='password')
    alex = User(
        username='Alex', email='alex@aa.io', password='password')
    tifa = User(
        username='Tifa', email='tifa@aa.io', password='password')
    cloud = User(
        username='Cloud', email='cloud@aa.io', password='password')
    aerith = User(
        username='Aerith', email='aerith@aa.io', password='password')
    barrett = User(
        username='Barrett', email='barrett@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(alex)
    db.session.add(tifa)
    db.session.add(cloud)
    db.session.add(aerith)
    db.session.add(barrett)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
