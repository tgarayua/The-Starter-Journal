# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create({ username: 'tgarayua', email: 'tgarayua@gmail.com', password: 'Tommy123' })

gratitude_lists = GratitudeItem.create({ user_id: 1, title: 'Wealth - got paid'})
gratitude_lists = GratitudeItem.create({ user_id: 1, title: 'Health - made a smoothie today'})
gratitude_lists = GratitudeItem.create({ user_id: 1, title: 'Love - puppy just being super cute'})


task_lists = Task.create({ user_id: 1, complete: false, title: "Homework"})
task_lists = Task.create({ user_id: 1, complete: false, title: "Dishes"})
task_lists = Task.create({ user_id: 1, complete: false, title: "Laundry for tonight"})
task_lists = Task.create({ user_id: 1, complete: false, title: "Testing task list"})

journal_posts = JournalPost.create([{ user_id: 1, title: 'First Test', content: 'Testing 123 this is the first test!' }, 
{ user_id: 1, title: 'Second Test', content: 'Testing 123 this is the Second test!' }, 
{ user_id: 1, title: 'Third Test', content: 'Testing 123 this is the third test!' }])