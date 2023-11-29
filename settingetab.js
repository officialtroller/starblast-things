console.log('Settings loaded');

var socialDie1 = document.querySelector('.social');

if (socialDie1) {
    var loveIcon = document.createElement('i');
    loveIcon.className = 'sbg sbg-menu';
    socialDie1.appendChild(loveIcon);
    var settingstab = null;

    loveIcon.addEventListener('mousedown', function (event) {
        if (!settingstab) {
            //settings tab
            console.log('Settings opened');
            settingstab = document.createElement('div');
            settingstab.id = 'settings-manager';
            settingstab.style.width = '500px';
            settingstab.style.background = 'hsla(60, 100%, 50%, 0.3)';
            settingstab.style.borderRadius = '20px';
            settingstab.style.padding = '40px';
            settingstab.style.boxShadow = '0 0 10px rgba(0,0,0,.3)';
            settingstab.style.position = 'fixed';
            settingstab.style.left = '50%';
            settingstab.style.top = '50%';
            settingstab.style.transform = 'translate(-50%, -50%)';
            settingstab.style.backdropFilter = 'blur(5px)';
            settingstab.style.webkitBackdropFilter = 'blur(5px)';
            settingstab.style.zIndex = '9999';
            settingstab.style.display = 'none';
            //close button
            var closeButtonTopRight1 = document.createElement('button');
            closeButtonTopRight1.textContent = 'X';
            closeButtonTopRight1.style.position = 'absolute';
            closeButtonTopRight1.style.top = '10px';
            closeButtonTopRight1.style.right = '10px';
            closeButtonTopRight1.style.userSelect = 'none';
            closeButtonTopRight1.addEventListener('click', function (event) {
                event.stopPropagation();
                settingstab.remove();
                settingstab = null;
            });
            settingstab.appendChild(closeButtonTopRight1);
            //header
            var header = document.createElement('h2');
            header.innerText = 'Client Settings';
            header.style.userSelect = 'none';
            header.style.pointerEvents = 'none';
            settingstab.appendChild(header);
            //Lowercase Name
            var lwerlol = document.createElement('input');
            lwerlol.type = 'checkbox';
            lwerlol.id = 'lowercaseName';
            var lowerlol = document.createElement('label');
            lowerlol.htmlFor = 'lowercaseName';
            lowerlol.appendChild(document.createTextNode('Lowercase Name'));
            lowerlol.style.userSelect = 'none';
            lowerlol.style.pointerEvents = 'none';
            //Uncover Leader
            var checkleader = document.createElement('input');
            checkleader.type = 'checkbox';
            checkleader.id = 'uncoverLeader';
            var label1 = document.createElement('label');
            label1.htmlFor = 'uncoverLeader';
            label1.appendChild(document.createTextNode('Uncover Leader'));
            label1.style.userSelect = 'none';
            label1.style.pointerEvents = 'none';
            var br1 = document.createElement('br');
            br1.style.userSelect = 'none';
            br1.style.pointerEvents = 'none';
            //example mod
            var emablemod = document.createElement('input');
            emablemod.type = 'checkbox';
            emablemod.id = 'exampleMod';
            var label2 = document.createElement('label');
            label2.htmlFor = 'exampleMod';
            label2.appendChild(document.createTextNode('Example Mod'));
            label2.style.userSelect = 'none';
            label2.style.pointerEvents = 'none';
            //Blur Option
            var blurlol = document.createElement('input');
            blurlol.type = 'checkbox';
            blurlol.id = 'blurlol';
            var brurwha = document.createElement('label');
            brurwha.htmlFor = 'blurlol';
            brurwha.appendChild(document.createTextNode('Blur'));
            brurwha.style.userSelect = 'none';
            brurwha.style.pointerEvents = 'none';
            //Remove Timer
            var bebotmber = document.createElement('input');
            bebotmber.type = 'checkbox';
            bebotmber.id = 'removeTimer';
            var label3 = document.createElement('label');
            label3.htmlFor = 'removeTimer';
            label3.appendChild(document.createTextNode('Remove Timer'));
            label3.style.userSelect = 'none';
            label3.style.pointerEvents = 'none';
            //Custom Station Modules
            var molds = document.createElement('input');
            molds.type = 'checkbox';
            molds.id = 'stationists';
            var modls = document.createElement('label');
            modls.htmlFor = 'stationists';
            modls.appendChild(document.createTextNode('Custom Station Modules'));
            modls.style.userSelect = 'none';
            modls.style.pointerEvents = 'none';
            //Custom Weapon Modules
            var morlds = document.createElement('input');
            morlds.type = 'checkbox';
            morlds.id = 'weaponists';
            var mordls = document.createElement('label');
            mordls.htmlFor = 'weaponists';
            mordls.appendChild(document.createTextNode('Custom Weapon Modules'));
            mordls.style.userSelect = 'none';
            mordls.style.pointerEvents = 'none';
            //Emotes
            var ebot = document.createElement('label');
            ebot.htmlFor = 'emoteCapacity';
            ebot.classList.add('emote-label');
            ebot.style.userSelect = 'none';
            ebot.style.pointerEvents = 'none';
            ebot.htmlFor = 'emoteCapacity';
            ebot.appendChild(document.createTextNode('Emote Capacity:'));
            var ebote = document.createElement('span');
            ebote.id = 'emoteCapacityValue';
            ebote.classList.add('emote-value');
            ebote.appendChild(document.createTextNode('1'));
            ebote.style.userSelect = 'none';
            ebote.style.pointerEvents = 'none';
            var eboti = document.createElement('input');
            eboti.type = 'range';
            eboti.id = 'emoteCapacity';
            eboti.min = '1';
            eboti.max = '5';
            eboti.classList.add('emote-slider');
            //Gem Color
            var gemus = document.createElement('label');
            gemus.htmlFor = 'gemColor';
            gemus.classList.add('color-label');
            gemus.style.userSelect = 'none';
            gemus.style.pointerEvents = 'none';
            gemus.appendChild(document.createTextNode('Gem Color:'));
            var gembus = document.createElement('input');
            gembus.type = 'color';
            gembus.id = 'gemColor';
            gembus.classList.add('color-input');
            //apply button
            var applythng = document.createElement('button');
            applythng.id = 'applyChangesBtn';
            applythng.innerHTML = 'Apply Changes';
            applythng.style.padding = '6px 10px';
            applythng.style.fontSize = '.95vw';
            applythng.style.cursor = 'pointer';
            applythng.style.margin = '5px 0 0 0';
            applythng.style.textAlign = 'center';
            applythng.style.background = 'radial-gradient(ellipse at center, hsla(60,50%,0%,1) 0, hsla(60,100%,70%,.5) 150%)';
            applythng.style.boxShadow = '0 0 6px hsla(60,100%,80%,1)';
            applythng.style.textShadow = '0 0 7px hsla(60,100%,80%,1)';
            applythng.style.color = 'hsla(60,100%,90%,.8)';
            applythng.style.fontFamily = 'Play, Verdana';
            applythng.style.border = '0';
            applythng.style.borderRadius = '20px';

            //apply things to the Settings Menu
            settingstab.appendChild(lwerlol);
            settingstab.appendChild(lowerlol);
            settingstab.appendChild(br1.cloneNode());
            settingstab.appendChild(molds);
            settingstab.appendChild(modls);
            settingstab.appendChild(br1.cloneNode());
            settingstab.appendChild(morlds);
            settingstab.appendChild(mordls);
            settingstab.appendChild(br1.cloneNode());
            settingstab.appendChild(checkleader);
            settingstab.appendChild(label1);
            settingstab.appendChild(br1.cloneNode());
            settingstab.appendChild(blurlol);
            settingstab.appendChild(brurwha);
            settingstab.appendChild(br1.cloneNode());
            settingstab.appendChild(emablemod);
            settingstab.appendChild(label2);
            settingstab.appendChild(br1.cloneNode());
            settingstab.appendChild(bebotmber);
            settingstab.appendChild(label3);
            settingstab.appendChild(br1.cloneNode());
            settingstab.appendChild(ebot);
            settingstab.appendChild(ebote);
            settingstab.appendChild(eboti);
            settingstab.appendChild(br1.cloneNode());
            settingstab.appendChild(gemus);
            settingstab.appendChild(gembus);
            settingstab.appendChild(br1.cloneNode());
            settingstab.appendChild(applythng);
            //apply Settings Menu to game
            document.body.appendChild(settingstab);
            settingstab.style.display = 'block';
            loadSettings();
            attachEventListeners();
        }
    });
}

function attachEventListeners() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            saveSetting(checkbox.id, checkbox.checked);
        });
    });

    var rangeInput = document.getElementById('emoteCapacity');
    if (rangeInput) {
        rangeInput.addEventListener('input', function () {
            saveSetting('emoteCapacity', Number(rangeInput.value));
            document.getElementById('emoteCapacityValue').textContent = rangeInput.value;
        });
        rangeInput.value = getSettingValue('emoteCapacity');
        document.getElementById('emoteCapacityValue').textContent = rangeInput.value;
    }

    var colorInput = document.getElementById('gemColor');
    if (colorInput) {
        colorInput.addEventListener('input', function () {
            saveSetting('gemColor', colorInput.value);
        });
        colorInput.value = getSettingValue('gemColor');
    }

    var applyChangesBtn = document.getElementById('applyChangesBtn');
    if (applyChangesBtn) {
        applyChangesBtn.addEventListener('click', function () {
            saveSetting();
            location.reload();
        });
    }
}

function loadSettings() {
    var settings = [
        'uncoverLeader',
        'exampleMod',
        'removeTimer',
        'emoteCapacity',
        'gemColor',
        'lowercaseName',
        'blurlol',
        'stationists',
        'weaponists'
    ];

    settings.forEach(function (setting) {
        var key = getKey(setting);
        var value = localStorage.getItem(key);
        if (value !== null) {
            if (setting === 'emoteCapacity') {
                document.getElementById(setting).value = value;
                document.getElementById('emoteCapacityValue').textContent = value;
            } else if (setting === 'gemColor') {
                document.getElementById(setting).value = value;
            } else {
                document.getElementById(setting).checked = JSON.parse(value);
            }
        }
    });
}

function saveSetting(setting, value) {
    var key = getKey(setting);
    if (setting === 'gemColor') {
        localStorage.setItem(key, value);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

function getKey(setting) {
    switch (setting) {
        case 'weaponists':
            return 'weaponisten';
        case 'stationists':
            return 'stationisten';
        case 'blurlol':
            return 'blurdes';
        case 'uncoverLeader':
            return 'leaderunde';
        case 'exampleMod':
            return 'noobus';
        case 'emoteCapacity':
            return 'emopacity';
        case 'gemColor':
            return 'gemindeed';
        case 'lowercaseName':
            return 'lownamecase';
        case 'removeTimer':
            return 'timdel';
        default:
            return setting;
    }
}

function getSettingValue(setting) {
    var key = getKey(setting);
    var value = localStorage.getItem(key);
    if (setting === 'emoteCapacity') {
        return value ? Number(value) : 1;
    } else if (setting === 'gemColor') {
        return value || '#00ff00';
    }
    return value ? JSON.parse(value) : false;
}
