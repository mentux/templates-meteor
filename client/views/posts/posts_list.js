var postsData = [
    {
        title: 'Introdução ao Meteor',
        author: 'Juca Bala',
        url: 'http://www.google.com.br'
    },
    {
        title: 'Meteor',
        author: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'Hi Meteor',
        author: 'Juca Bala',
        url: 'http://google.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});