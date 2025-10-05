const btn = document.getElementById('btn');
const iid = document.getElementById('iid');
const api = document.getElementById('api');
const msg = document.getElementById('msg');

btn.addEventListener('click', async () => {
    msg.textContent = 'Enviando...';
    try {
        const instanceId = iid.value.trim();
        if (!instanceId) { msg.textContent = 'Insira um instance id válido'; return; }
        const token = api.value.trim();
        if (!token) { msg.textContent = 'Insira o token da API'; return; }
        const resp = await fetch('/api/reboot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ instanceIds: [instanceId] })
        });
        const data = await resp.json();
        if (resp.ok) {
            msg.textContent = 'Comando enviado — verifique o console da AWS.';
        } else {
            msg.textContent = (data && data.error) ? (data.error + (data.unknown ? ' ' + JSON.stringify(data.unknown) : '')) : 'Erro';
        }
    } catch (e) {
        msg.textContent = 'Falha: ' + (e.message || e);
    }
});
