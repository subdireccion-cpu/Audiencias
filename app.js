/**
 * Audiencias Dashboard - App Logic
 * Â© 2026 SubdirecciÃ³n CPU
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard Audiencias Inicializado');

    // Update Current Date
    const updateDate = () => {
        const dateElement = document.getElementById('current-date');
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('es-ES', options);
    };

    updateDate();

    // SimulaciÃ³n de actualizaciÃ³n de datos en vivo (Live Data Feed)
    const simulateLiveData = () => {
        const liveShare = document.getElementById('live-share');
        const dailyViewers = document.getElementById('daily-viewers');
        
        setInterval(() => {
            // Un pequeÃ±o factor aleatorio para simular realismo
            const randomChange = (Math.random() * 0.4 - 0.2); // +/- 0.2%
            const currentShare = parseFloat(liveShare.textContent);
            const nextShare = (currentShare + randomChange).toFixed(1);
            
            liveShare.textContent = nextShare + '%';

            // AnimaciÃ³n de pulso cuando cambia el dato
            liveShare.style.transform = 'scale(1.05)';
            liveShare.style.transition = 'transform 0.1s ease-out';
            setTimeout(() => {
                liveShare.style.transform = 'scale(1)';
            }, 100);

            // Simular cambio en espectadores
            const currentViewers = parseInt(dailyViewers.textContent.replace('K', ''));
            const nextViewers = currentViewers + Math.floor(Math.random() * 5);
            dailyViewers.textContent = nextViewers + 'K';

        }, 5000); // Cada 5 segundos
    };

    simulateLiveData();

    // Event Listeners for tabs
    const tabs = document.querySelectorAll('.btn-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            // AquÃ­ irÃ­a la carga de datos segÃºn el periodo (Hoy vs 7 DÃ­as)
            console.log('Cambiando a vista: ', e.target.textContent);
        });
    });

    // BÃºsqueda interactiva (SimulaciÃ³n)
    const searchInput = document.querySelector('.header-search input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const programs = document.querySelectorAll('.program-item');
        
        programs.forEach(item => {
            const name = item.querySelector('.program-name strong').textContent.toLowerCase();
            if (name.includes(query)) {
                item.style.display = 'flex';
                item.style.opacity = '1';
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
    });
});
