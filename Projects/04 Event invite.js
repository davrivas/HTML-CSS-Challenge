(function(){
    var accept = document.getElementById('accept-one'),
        decline = document.getElementById('decline-one'),
        inviteList = document.getElementById('Invite'),
        inviteH2 = document.getElementById('Invitation'),
        form = document.getElementsByTagName('form')[0],
        submit = document.getElementsByTagName('input')[4],
        thanks = document.getElementById('Thanks'),
        thanks1 = document.getElementById('thanks1'),
        thanks2 = document.getElementById('thanks2'),

        acceptChange = function() {
            accept.id = 'accept-two';
            accept.innerHTML = 'Going';
            accept.style.pointerEvents = "none";
            decline.style.pointerEvents = "none";
            decline.style.color = '#A9A9A9';
            inviteList.style.display = 'list-item';
            inviteH2.style.display = 'block';
            form.style.display = 'initial';
        },

        declineChange = function() {
            decline.id = 'decline-two';
            decline.innerHTML = 'Rejected';
            accept.style.pointerEvents = "none";
            decline.style.pointerEvents = "none";
            accept.style.color = '#A9A9A9';
            thanks.style.display = 'block';
            thanks2.style.display = 'inline';
        }

        submitButton = function() {
        	form.style.display = 'none';
        	thanks.style.display = 'block';
        	thanks1.style.display = 'inline';
        };

    accept.addEventListener("click", acceptChange);
    decline.addEventListener("click", declineChange);
    submit.addEventListener("click", submitButton);
})();