# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([{ username: 'tgarayua', email: 'tgarayua@gmail.com', password: 'Tommy123' }, 
{ username: 'JoeSmow', email: 'JoeSmow@gmail.com', password: 'Joe123' }, 
{ username: 'JonnyA', email: 'jonnyA@gmail.com', password: 'Jonny123'}])

gratitude_lists = GratitudeList.create([{ user_id: 1, gratitude_item: ['Health', 'Weath', 'Happiness', 'love']}])

task_lists = TaskList.create([{ user_id: 1, task_item: ['Homework', 'gym', 'work']}])

journal_posts = JournalPost.create([{ user_id: 1, title: 'First Test', content: 'Testing 123 this is the first test!' }, 
{ user_id: 1, title: 'Second Test', content: 'Testing 123 this is the Second test!' }, 
{ user_id: 1, title: 'Third Test', content: 'Testing 123 this is the third test!' }])