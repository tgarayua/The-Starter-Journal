# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create({ username: 'tgarayua', email: 'tgarayua@gmail.com', password: 'Tommy123' })

gratitude_lists = GratitudeList.create({ user_id: 1, gratitude_item: 'Weath - got paid'})
gratitude_lists = GratitudeList.create({ user_id: 1, gratitude_item: 'Health - made a smoothy today'})
gratitude_lists = GratitudeList.create({ user_id: 1, gratitude_item: 'love - puppy jusy being super cute'})


task_lists = TaskList.create({ user_id: 1, complete: false, task_item: "Homework"})
task_lists = TaskList.create({ user_id: 1, complete: false, task_item: "Dishes"})
task_lists = TaskList.create({ user_id: 1, complete: false, task_item: "Laundry for tonight"})
task_lists = TaskList.create({ user_id: 1, complete: false, task_item: "Testing task list"})

journal_posts = JournalPost.create([{ user_id: 1, title: 'First Test', content: 'Testing 123 this is the first test!' }, 
{ user_id: 1, title: 'Second Test', content: 'Testing 123 this is the Second test!' }, 
{ user_id: 1, title: 'Third Test', content: 'Testing 123 this is the third test!' }])