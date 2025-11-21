document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(subdomains => {
            const timelineInner = document.querySelector('.timeline-inner');

            const addItems = () => {
                subdomains.forEach((sub, index) => {
                    const item = document.createElement('div');
                    item.className = 'timeline-item';

                    const title = document.createElement('div');
                    title.className = 'timeline-title';
                    title.textContent = sub.name;

                    const description = document.createElement('div');
                    description.className = 'timeline-description';

                    const descText = document.createElement('span');
                    descText.className = 'timeline-description-text';
                    descText.textContent = sub.desc;

                    description.appendChild(descText);

                    item.appendChild(title);
                    item.appendChild(description);

                    item.addEventListener('click', () => {
                        window.open(sub.url, '_blank');
                    });

                    timelineInner.appendChild(item);
                });
            };

            addItems();
            addItems();
            addItems();
            addItems();
            addItems();
            addItems();
            addItems();
            addItems();
            addItems();
         // Duplicate for looping
        })
        .catch(error => console.error('Error loading data:', error));
});