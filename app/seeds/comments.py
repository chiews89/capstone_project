from app.models import db, Comment
from datetime import datetime

def seed_comments():
    comment1 = Comment(
        user_id=1,
        post_id=1,
        comment='Wow! 🤩',
        created_at=datetime.now(),
        updated_at=datetime.now(),
      )
    comment2 = Comment(
        user_id=2,
        post_id=2,
        comment='I always wanted to visit!')
    comment3 = Comment(
        user_id=3,
        post_id=3,
        comment='Looks amazing 🔥',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment4 = Comment(
        user_id=1,
        post_id=1,
        comment='I am ready for new adventures too!🛫 ')
    comment5 = Comment(
        user_id=2,
        post_id=1,
        comment='Love your posts about traveling. Keep posting!',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment6 = Comment(
        user_id=3,
        post_id=2,
        comment='Love traveling! ',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment7 = Comment(
        user_id=1,
        post_id=2,
        comment='😍',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment8 = Comment(
        user_id=2,
        post_id=3,
        comment='Nice!!! My wife an I are going there next month.',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment9 = Comment(
        user_id=3,
        post_id=3,
        comment='We are going there with my friends soon!',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment10 = Comment(
        user_id=1,
        post_id=1,
        comment='Great pic! 👍 ',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment11 = Comment(
        user_id=2,
        post_id=1,
        comment='Looks like a dream vacation.',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment12 = Comment(
        user_id=3,
        post_id=2,
        comment='I love this place!',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment13 = Comment(
        user_id=1,
        post_id=2,
        comment='This picture is such a high resolution!',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment14 = Comment(
        user_id=2,
        post_id=3,
        comment='I miss travelling',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )
    comment15 = Comment(
        user_id=3,
        post_id=3,
        comment='Cannot wait to go there this summer! 🤩 ',
        created_at=datetime.now(),
        updated_at=datetime.now(),
        )


    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
