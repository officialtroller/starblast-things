console.log('Script loaded');

var socialDiv = document.querySelector('.social');

if (socialDiv) {
    var alienIcon = document.createElement('i');
    alienIcon.className = 'sbg sbg-alien';
    socialDiv.appendChild(alienIcon);
    var badgeManager = null;

    alienIcon.addEventListener('mousedown', function (event) {
        if (!badgeManager) {
            console.log('Badge manager opened');
            badgeManager = document.createElement('div');
            badgeManager.id = 'badge-manager';
            badgeManager.style.width = '500px';
            badgeManager.style.background = 'hsla(60, 100%, 50%, 0.3)';
            badgeManager.style.borderRadius = '20px';
            badgeManager.style.padding = '40px';
            badgeManager.style.boxShadow = '0 0 10px rgba(0,0,0,.3)';
            badgeManager.style.position = 'fixed';
            badgeManager.style.left = '50%';
            badgeManager.style.top = '50%';
            badgeManager.style.transform = 'translate(-50%, -50%)';
            badgeManager.style.backdropFilter = 'blur(5px)';
            badgeManager.style.webkitBackdropFilter = 'blur(5px)';
            badgeManager.style.zIndex = '9999'; // Set a high z-index to bring it to the front
            badgeManager.style.display = 'none';

            var closeButtonTopRight = document.createElement('button');
            closeButtonTopRight.textContent = 'X';
            closeButtonTopRight.style.position = 'absolute';
            closeButtonTopRight.style.top = '10px';
            closeButtonTopRight.style.right = '10px';
            closeButtonTopRight.style.userSelect = 'none';

            closeButtonTopRight.addEventListener('click', function (event) {
                event.stopPropagation();
                badgeManager.remove();
                badgeManager = null;
            });

            badgeManager.appendChild(closeButtonTopRight);

            var header = document.createElement('h2');
            header.innerText = 'Badge Manager';
            header.style.userSelect = 'none';
            header.style.pointerEvents = 'none';
            badgeManager.appendChild(header);

            var addBadgeButton = document.createElement('button');
            addBadgeButton.innerText = 'Add Badge';
            addBadgeButton.style.userSelect = 'none';
            addBadgeButton.onclick = function () {
                var name = prompt('Enter a name for the badge:');
                if (name !== null && name !== '') {
                    var url = prompt('Enter a valid link with jpg or png:');
                    if (url !== null && validateUrl(url)) {
                        saveBadge(name, url);
                        location.reload();
                        displayBadge(name, url);
                    } else {
                        alert('Please enter a valid link with jpg or png.');
                    }
                }
            };
            badgeManager.appendChild(addBadgeButton);

            document.body.appendChild(badgeManager);
            badgeManager.style.display = 'block';
            var savedBadges = JSON.parse(localStorage.getItem('badgergers')) || [];
            savedBadges.forEach(function (badge) {
                displayBadge(badge.name, badge.url);
            });
        }
    });
}

function validateUrl(url) {
    var regex = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return regex.test(url);
}

function saveBadge(name, url) {
    var badges = JSON.parse(localStorage.getItem('badgergers')) || [];
    badges.push({ "name": name, "url": url });
    localStorage.setItem('badgergers', JSON.stringify(badges));
}

function displayBadge(name, url) {
    var badge = document.createElement('div');
    badge.style.display = 'flex';
    badge.style.alignItems = 'center';
    badge.style.marginBottom = '10px';

    var img = document.createElement('img');
    img.src = url;
    img.style.width = '64px';
    img.style.height = '64px';
    img.style.userSelect = 'none';
    img.style.pointerEvents = 'none';
    badge.appendChild(img);

    var badgeName = document.createElement('p');
    badgeName.innerText = name;
    badgeName.style.marginLeft = '10px';
    badgeName.style.userSelect = 'none';
    badgeName.style.pointerEvents = 'none';
    badge.appendChild(badgeName);

    var closeButton = document.createElement('button');
    closeButton.innerText = 'x';
    closeButton.style.marginLeft = 'auto';
    closeButton.style.userSelect = 'none';
    closeButton.style.userSelect = 'none';
    closeButton.onclick = function () {
        badge.remove();
        location.reload();
        updateLocalStorage();
    };
    badge.appendChild(closeButton);

    badgeManager.appendChild(badge);
}

function updateLocalStorage() {
    var badges = [];
    document.querySelectorAll('#badge-manager div').forEach(function (badgeElement) {
        var name = badgeElement.querySelector('p').innerText;
        var url = badgeElement.querySelector('img').src;
        badges.push({ "name": name, "url": url });
    });

    if (badges.length > 0) {
        localStorage.setItem('badgergers', JSON.stringify(badges));
    } else {
        localStorage.removeItem('badgergers');
    }
}
