const db = {
    "categories": [
        { "id": 1, "title": "Informatique", "description": "Ordinateurs, portables, périphériques et composants.", "img": "https://placehold.co/600x400?text=Informatique" },
        { "id": 2, "title": "Téléphonie & Tablettes", "description": "Smartphones, tablettes et accessoires mobiles.", "img": "https://placehold.co/600x400?text=Téléphonie" },
        { "id": 3, "title": "TV & Multimédia", "description": "Téléviseurs, systèmes audio et accessoires multimédia.", "img": "https://placehold.co/600x400?text=TV+%26+Multimédia" },
        { "id": 4, "title": "Jeux & Consoles", "description": "Consoles, jeux vidéo et manettes.", "img": "https://placehold.co/600x400?text=Jeux+%26+Consoles" }
    ],

    "products": [
        {
            "id": 1,
            "nom": "Ultrabook Pro 14\"",
            "description": "L’Ultrabook Pro 14\" combine puissance et élégance. Équipé d’un processeur Intel Core i7 de 11e génération, de 16 Go de RAM et d’un SSD ultra-rapide de 512 Go, il assure des performances fluides pour le travail, le multimédia et le divertissement. Son écran Full HD 14\" aux bords fins offre une expérience visuelle immersive, tandis que sa conception légère en aluminium le rend idéal pour les professionnels en déplacement.",
            "img": "https://placehold.co/400x300?text=Ultrabook+Pro",
            "prix": 595000,
            "qty": 12,
            "rate": 4.6,
            "devise": "XAF"
        },
        {
            "id": 2,
            "nom": "Souris Gaming X300",
            "description": "Conçue pour les gamers exigeants, la Souris Gaming X300 offre une précision exceptionnelle grâce à son capteur optique 16 000 DPI ajustable. Son design ergonomique assure une prise en main confortable pendant les longues sessions de jeu. Les boutons programmables et l’éclairage RGB personnalisable ajoutent une touche de style et de performance à votre setup gaming.",
            "img": "https://placehold.co/400x300?text=Souris+X300",
            "prix": 12000,
            "qty": 45,
            "rate": 4.2,
            "devise": "XAF"
        },
        {
            "id": 3,
            "nom": "Smartphone Nova 12",
            "description": "Le Nova 12 combine design moderne et performance. Son écran AMOLED de 6.5 pouces offre des couleurs éclatantes et une grande fluidité. Avec ses 8 Go de RAM, 128 Go de stockage et son processeur octa-core, il garantit une navigation fluide et rapide. Sa caméra quadruple de 64 MP capture chaque instant avec précision, et sa batterie de 4500 mAh assure une autonomie d’une journée entière.",
            "img": "https://placehold.co/400x300?text=Nova+12",
            "prix": 180000,
            "qty": 25,
            "rate": 4.4,
            "devise": "XAF"
        },
        {
            "id": 4,
            "nom": "Tablette TabGo 10\"",
            "description": "La TabGo 10\" est la tablette idéale pour le multimédia, la lecture et les cours en ligne. Dotée d’un grand écran IPS de 10 pouces et d’un processeur quad-core, elle offre une expérience fluide pour la navigation, la vidéo et les applications éducatives. Sa batterie longue durée de 7000 mAh et son design léger la rendent parfaite pour une utilisation quotidienne.",
            "img": "https://placehold.co/400x300?text=TabGo+10",
            "prix": 95000,
            "qty": 18,
            "rate": 4.0,
            "devise": "XAF"
        },
        {
            "id": 5,
            "nom": "TV LED 55\" 4K",
            "description": "Découvrez une qualité d’image exceptionnelle avec cette TV LED 55\" 4K Ultra HD. Grâce à sa technologie HDR, chaque scène est plus détaillée et plus réaliste. Connectez facilement vos applications préférées grâce au système Smart TV intégré. Son design fin et élégant s’intègre parfaitement à votre salon pour une expérience cinéma à domicile.",
            "img": "https://placehold.co/400x300?text=TV+55+4K",
            "prix": 420000,
            "qty": 7,
            "rate": 4.5,
            "devise": "XAF"
        },
        {
            "id": 6,
            "nom": "Barre Son HomeCinema",
            "description": "Plongez au cœur de vos films et musiques avec la Barre Son HomeCinema. Dotée d’une puissance de 300W et d’une connectivité Bluetooth, elle offre un son immersif et équilibré. Son design compact s’adapte à tous les espaces, tandis que ses modes audio ajustables améliorent chaque expérience sonore, du cinéma au gaming.",
            "img": "https://placehold.co/400x300?text=Barre+Son",
            "prix": 85000,
            "qty": 20,
            "rate": 4.1,
            "devise": "XAF"
        },
        {
            "id": 7,
            "nom": "Console GameBox S",
            "description": "La GameBox S redéfinit le jeu vidéo avec des graphismes de nouvelle génération et un stockage SSD de 1 To pour des chargements ultra-rapides. Son interface intuitive et sa compatibilité avec des centaines de jeux en ligne en font un choix incontournable pour les joueurs passionnés. Jouez, streamez et profitez d’un divertissement illimité.",
            "img": "https://placehold.co/400x300?text=GameBox+S",
            "prix": 310000,
            "qty": 10,
            "rate": 4.7,
            "devise": "XAF"
        },
        {
            "id": 8,
            "nom": "Manette Pro Wireless",
            "description": "Conçue pour la précision et le confort, la Manette Pro Wireless offre une connectivité sans fil stable et une autonomie de plus de 10 heures. Sa prise en main ergonomique et ses gâchettes réactives garantissent une expérience de jeu optimale sur console, PC ou smartphone.",
            "img": "https://placehold.co/400x300?text=Manette+Pro",
            "prix": 25000,
            "qty": 60,
            "rate": 4.3,
            "devise": "XAF"
        },
        {
            "id": 9,
            "nom": "SSD NVMe 1TB",
            "description": "Le SSD NVMe 1TB assure des vitesses de lecture et d’écriture jusqu’à 3500 Mo/s, idéales pour les professionnels, les gamers et les créateurs de contenu. Sa conception compacte et son interface PCIe 4.0 garantissent des performances inégalées et une meilleure réactivité de votre système.",
            "img": "https://placehold.co/400x300?text=SSD+1TB",
            "prix": 70000,
            "qty": 34,
            "rate": 4.6,
            "devise": "XAF"
        },
        {
            "id": 10,
            "nom": "Casque Audio Bluetooth",
            "description": "Profitez d’un son clair et puissant avec ce casque Bluetooth doté d’une réduction active du bruit. Son arceau ajustable et ses coussinets doux assurent un confort longue durée. Compatible avec tous les appareils Bluetooth, il offre jusqu’à 20 heures d’autonomie pour écouter votre musique en toute liberté.",
            "img": "https://placehold.co/400x300?text=Casque+Bluetooth",
            "prix": 38000,
            "qty": 28,
            "rate": 4.0,
            "devise": "XAF"
        },
        {
            "id": 11,
            "nom": "Chargeur Rapide 65W",
            "description": "Rechargez vos appareils à vitesse éclair grâce à ce chargeur rapide 65W compatible USB-C Power Delivery. Il détecte automatiquement le courant optimal pour chaque appareil, garantissant une charge sécurisée et efficace pour smartphones, tablettes et ordinateurs portables.",
            "img": "https://placehold.co/400x300?text=Chargeur+65W",
            "prix": 9000,
            "qty": 120,
            "rate": 4.2,
            "devise": "XAF"
        },
        {
            "id": 12,
            "nom": "Support TV Mural",
            "description": "Le support TV mural inclinable offre une installation sûre et pratique pour les téléviseurs de 32 à 65 pouces. Fabriqué en acier robuste, il permet d’ajuster facilement l’inclinaison pour un angle de vision optimal tout en économisant de l’espace dans votre salon.",
            "img": "https://placehold.co/400x300?text=Support+TV",
            "prix": 15000,
            "qty": 40,
            "rate": 3.9,
            "devise": "XAF"
        }
    ],

    "produit_categorie": [
        { "id_cat": 1, "id_prod": 1 },
        { "id_cat": 1, "id_prod": 2 },
        { "id_cat": 1, "id_prod": 9 },
        { "id_cat": 2, "id_prod": 3 },
        { "id_cat": 2, "id_prod": 4 },
        { "id_cat": 2, "id_prod": 11 },
        { "id_cat": 3, "id_prod": 5 },
        { "id_cat": 3, "id_prod": 6 },
        { "id_cat": 3, "id_prod": 12 },
        { "id_cat": 4, "id_prod": 7 },
        { "id_cat": 4, "id_prod": 8 },
        { "id_cat": 4, "id_prod": 10 }
    ],

    "users": [
        { "id": 1, "nom": "Ngue", "prenom": "Paul", "username": "p.ngue", "role": "client", "email": "paul.ngue@example.com", "password": "$2b$10$fakehashedpassword1" },
        { "id": 2, "nom": "Abena", "prenom": "Sophie", "username": "s.abena", "role": "client", "email": "sophie.abena@example.com", "password": "$2b$10$fakehashedpassword2" },
        { "id": 3, "nom": "Tchaptchet", "prenom": "Marc", "username": "m.tch", "role": "client", "email": "marc.tch@example.com", "password": "$2b$10$fakehashedpassword3" },
        { "id": 4, "nom": "Admin", "prenom": "Super", "username": "admin", "role": "admin", "email": "admin@demo.com", "password": "$2b$10$fakehashedadmin" },
        { "id": 5, "nom": "Koulla", "prenom": "Lina", "username": "l.koulla", "role": "client", "email": "lina.koulla@example.com", "password": "$2b$10$fakehashedpassword4" },
        { "id": 6, "nom": "Obame", "prenom": "Eric", "username": "e.obame", "role": "client", "email": "eric.obame@example.com", "password": "$2b$10$fakehashedpassword5" }
    ],

    "paniers": [
        {
            "id": 1,
            "id_user": 1,
            "email": "paul.ngue@example.com",
            "password": "$2b$10$fakecartpass1",
            "produits": [
                { "id_prod": 1, "nom": "Ultrabook Pro 14\"", "prix": 595000, "qty": 10, "devise": "XAF" },
                { "id_prod": 11, "nom": "Chargeur Rapide 65W", "prix": 9000, "qty": 3, "devise": "XAF" }
            ]
        },
        {
            "id": 2,
            "id_user": 2,
            "email": "sophie.abena@example.com",
            "password": "$2b$10$fakecartpass2",
            "produits": [
                { "id_prod": 3, "nom": "Smartphone Nova 12", "prix": 180000, "qty": 1, "devise": "XAF" },
                { "id_prod": 8, "nom": "Manette Pro Wireless", "prix": 25000, "qty": 2, "devise": "XAF" }
            ]
        },
        {
            "id": 3,
            "id_user": 5,
            "email": "lina.koulla@example.com",
            "password": "$2b$10$fakecartpass3",
            "produits": [
                { "id_prod": 5, "nom": "TV LED 55\" 4K", "prix": 420000, "qty": 1, "devise": "XAF" },
                { "id_prod": 6, "nom": "Barre Son HomeCinema", "prix": 85000, "qty": 1, "devise": "XAF" },
                { "id_prod": 12, "nom": "Support TV Mural", "prix": 15000, "qty": 1, "devise": "XAF" }
            ]
        },
        {
            "id": 4,
            "id_user": 3,
            "email": "marc.tch@example.com",
            "password": "$2b$10$fakecartpass4",
            "produits": [
                { "id_prod": 9, "nom": "SSD NVMe 1TB", "prix": 70000, "qty": 1, "devise": "XAF" },
                { "id_prod": 2, "nom": "Souris Gaming X300", "prix": 12000, "qty": 1, "devise": "XAF" }
            ]
        }
    ],

    "panier_prod": [
        { "id_panier": 1, "id_prod": 1 },
        { "id_panier": 1, "id_prod": 11 },
        { "id_panier": 2, "id_prod": 3 },
        { "id_panier": 2, "id_prod": 8 },
        { "id_panier": 3, "id_prod": 5 },
        { "id_panier": 3, "id_prod": 6 },
        { "id_panier": 3, "id_prod": 12 },
        { "id_panier": 4, "id_prod": 9 },
        { "id_panier": 4, "id_prod": 2 }
    ],

    "commandes": [
        { "id": 1001, id_panier: 1, "id_prod": "[1,5,3]", "date": "2025-10-05T10:12:00Z", "status": "paid", "total": 604000, "devise": "XAF" },
        { "id": 1002, id_panier: 4, "id_prod": "[2,4,3]", "date": "2025-10-07T15:30:00Z", "status": "pending", "total": 230000, "devise": "XAF" },
        { "id": 1003, id_panier: 1, "id_prod": "[3]", "date": "2025-10-08T08:45:00Z", "status": "cancel", "total": 520000, "devise": "XAF" }
    ]
}
