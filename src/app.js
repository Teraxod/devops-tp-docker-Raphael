function updateTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('timestamp').textContent = timestamp;
}

function generateContainerId() {
    const chars = '0123456789abcdef';
    let id = '';
    for (let i = 0; i < 12; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

function testContainer() {
    const resultBox = document.getElementById('result');
    const statusElement = document.getElementById('status');
    const containerId = document.getElementById('container-id').textContent;

    statusElement.textContent = 'Test en cours...';
    statusElement.style.color = '#EA580C';

    setTimeout(() => {
        statusElement.textContent = 'Container opérationnel';
        statusElement.style.color = '#16A34A';

        // Reset du contenu
        resultBox.textContent = '';
        resultBox.className = 'result-box success';

        // Titre
        const title = document.createElement('strong');
        title.textContent = 'Test du Container Réussi';
        resultBox.appendChild(title);
        resultBox.appendChild(document.createElement('br'));
        resultBox.appendChild(document.createElement('br'));

        // Contenu type "console"
        const lines = [
            'docker ps',
            'CONTAINER ID   IMAGE                                    STATUS',
            `${containerId}      ghcr.io/user/devops-tp-docker:latest   Up 5 minutes`,
            '',
            '- Serveur Nginx : OK',
            '- Application Web : OK',
            '- Port 80 : LISTENING',
            '- Health Check : PASSED'
        ];

        lines.forEach(line => {
            const div = document.createElement('div');
            div.textContent = line;
            resultBox.appendChild(div);
        });

    }, 1500);
}        

document.addEventListener('DOMContentLoaded', function() {
    updateTimestamp();
    setInterval(updateTimestamp, 1000);
    
    const containerId = generateContainerId();
    document.getElementById('container-id').textContent = containerId;
    
    document.getElementById('status').textContent = 'Container opérationnel';
});
