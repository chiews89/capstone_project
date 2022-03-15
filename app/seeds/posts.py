from app.models import db, Post
from datetime import datetime

def seed_posts():
    post1 = Post(
        user_id = 1,
        image_url = 'https://s.yimg.com/uu/api/res/1.2/J2zY35gBDkHJ0rli3GpEwQ--~B/Zmk9ZmlsbDtoPTQyMjt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-02/86e15720-9295-11ec-bf7f-e39fe064b30c.cf.jpg',
        description = 'Love this game!',
        created_at = datetime.now(),
        updated_at=datetime.now()
    )
    post2 = Post(
        user_id = 1,
        image_url = 'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/Elden_Ring_Tip1.png',
        description = 'Love this game!',
        created_at = datetime.now(),
        updated_at=datetime.now()
    )
    post3 = Post(
        user_id = 2,
        image_url = 'https://ca-times.brightspotcdn.com/dims4/default/550f4c0/2147483647/strip/true/crop/1920x1080+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2Fb0%2F4124c717492dbc6850af0a6e80d2%2Flegends-arceus-screenshot-24.jpg',
        description = 'Love this game!',
        created_at = datetime.now(),
        updated_at=datetime.now()
    )
    post4 = Post(
        user_id = 2,
        image_url = 'https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_legends_arceus/pokemon-legends-arceus-169.jpg',
        description = 'Love this game!',
        created_at = datetime.now(),
        updated_at=datetime.now()
    )
    post5 = Post(
        user_id = 3,
        image_url = 'https://images.nintendolife.com/20994d34a4cbf/legend-of-zelda-ocarina-of-time-3d.large.jpg',
        description = 'Love this game!',
        created_at = datetime.now(),
        updated_at=datetime.now()
    )
    post6 = Post(
        user_id = 3,
        image_url = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/Ocarina-of-Time-3D-Link-Riding-Through-Valley-Art.jpg',
        description = 'Love this game!',
        created_at = datetime.now(),
        updated_at=datetime.now()
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)

    db.session.commit()

def undo_posts():
  db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
  db.session.commit()
