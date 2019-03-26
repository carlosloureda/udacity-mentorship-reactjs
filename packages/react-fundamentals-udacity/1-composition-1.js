

function getProfileLink(username) {
    return "https://github.com/" + username;
}

function getProfilePic (username) {
    return 'https://github.com/' + username + '.png?size=200'
}

/**
 * We use composiiton to build the `getProfileData` function.
 * We could have built it providing the data directly. With this composiiton version
 * we will be able to reuse the getProfilePic or getProfileLink funcitons in other parts
 * of the code, and we keep a nice principle called `DOT`: Do one thing.
 *
 * getProfileLink – just builds up a string of the user's GitHub profile link
 * getProfilePic – just builds up a string the user's GitHub profile picture
 * getProfileData – returns a new object
 *
 * @param {*} username
 * @returns
 */
function getProfileData (username) {
    return {
      pic: getProfilePic(username),
      link: getProfileLink(username)
    }
  }