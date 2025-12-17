document.addEventListener('DOMContentLoaded', () => {
    const followButton = document.querySelector('.js-follow-btn');
    
    if (followButton) {
        followButton.addEventListener('click', (event) => {
            const isFollowed = event.target.classList.contains('profile-card__follow-btn--followed');

            if (isFollowed) {
                event.target.classList.remove('profile-card__follow-btn--followed');
                event.target.textContent = 'Follow';
                console.log('Cancelled follow');
            } else {
                event.target.classList.add('profile-card__follow-btn--followed');
                event.target.textContent = 'Followed';
                console.log('Followed');
            }
        });
    }
});