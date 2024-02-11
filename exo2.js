const carres = document.querySelectorAll('.Carre');

    carres.forEach(carre => {
        carre.addEventListener('click', function() {

        	//getAttribute sert à récupérer la valeur d'un élément
            const estReduit = this.getAttribute('data-reduit') === 'true';
            let angle = parseInt(this.getAttribute('data-angle') || '0', 10);

            if (!estReduit) {
               //1ER CLIC
                this.style.backgroundColor = "red";
                let style = getComputedStyle(this);
                let width = parseInt(style.width, 10);
                let height = parseInt(style.height, 10);

                // TAILLE
                this.style.width = (width * 0.9) + 'px';
                this.style.height = (height * 0.9) + 'px';

                // 360 DEGRES 
                angle += 360;
                this.style.transform = `rotate(${angle}deg)`;
                this.setAttribute('data-reduit', 'true');
            } else {               
                this.style.backgroundColor = ""; 
                let style = getComputedStyle(this);

                //CONVERSION EN INT
                let width = parseInt(style.width, 10) / 0.9;
                let height = parseInt(style.height, 10) / 0.9;

                // TAILLE NORMAL
                this.style.width = width + 'px';
                this.style.height = height + 'px';
                
                // ROTATION INVERSE
                angle -= 360; 
                this.style.transform = `rotate(${angle}deg)`;

                //setAttribute sert à ajouter un attribut à un élément
                this.setAttribute('data-reduit', 'false');
            }

            // MAJ l'angle
            this.setAttribute('data-angle', angle.toString());
        });


    });
