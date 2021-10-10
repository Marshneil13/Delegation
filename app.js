const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

// const lis = document.querySelectorAll('li');
// for(li of lis){
//     li.addEventListener('click', function(e){
//         li.remove();
//     })
// }

tweetsContainer.addEventListener('click', function(e){
    e.target.nodeName == 'LI' && e.target.remove(); //the particular element that was targeted
})
// Event delegation is used to add eventsListeners to apparent elements