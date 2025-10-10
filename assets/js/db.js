const db = {
    "categories": [
        { "id": 1, "title": "Informatique", "description": "Ordinateurs, portables, périphériques et composants.", "img": "https://placehold.co/600x400?text=Informatique" },
        { "id": 2, "title": "Téléphonie & Tablettes", "description": "Smartphones, tablettes et accessoires mobiles.", "img": "https://placehold.co/600x400?text=Téléphonie" },
        { "id": 3, "title": "TV & Multimédia", "description": "Téléviseurs, systèmes audio et accessoires multimédia.", "img": "https://placehold.co/600x400?text=TV+%26+Multimédia" },
        { "id": 4, "title": "Jeux & Consoles", "description": "Consoles, jeux vidéo et manettes.", "img": "https://placehold.co/600x400?text=Jeux+%26+Consoles" }
    ],

    "products": [
        { "id": 1, "nom": "Ultrabook Pro 14\"", "description": "Ultrabook 14\" i7, 16GB RAM, 512GB SSD", "img": "https://placehold.co/400x300?text=Ultrabook+Pro", "prix": 595000, "qty": 12, "rate": 4.6, "devise": "XAF" },
        { "id": 2, "nom": "Souris Gaming X300", "description": "Souris filaire haute précision 16000 DPI", "img": "https://placehold.co/400x300?text=Souris+X300", "prix": 12000, "qty": 45, "rate": 4.2, "devise": "XAF" },
        { "id": 3, "nom": "Smartphone Nova 12", "description": "6.5\" AMOLED, 8GB RAM, 128GB", "img": "https://placehold.co/400x300?text=Nova+12", "prix": 180000, "qty": 25, "rate": 4.4, "devise": "XAF" },
        { "id": 4, "nom": "Tablette TabGo 10\"", "description": "Tablette 10\" pour multimédia et lecture", "img": "https://placehold.co/400x300?text=TabGo+10", "prix": 95000, "qty": 18, "rate": 4.0, "devise": "XAF" },
        { "id": 5, "nom": "TV LED 55\" 4K", "description": "Téléviseur 55\" 4K Smart TV", "img": "https://placehold.co/400x300?text=TV+55+4K", "prix": 420000, "qty": 7, "rate": 4.5, "devise": "XAF" },
        { "id": 6, "nom": "Barre Son HomeCinema", "description": "Barre son Bluetooth, 300W", "img": "https://placehold.co/400x300?text=Barre+Son", "prix": 85000, "qty": 20, "rate": 4.1, "devise": "XAF" },
        { "id": 7, "nom": "Console GameBox S", "description": "Console nouvelle génération 1TB", "img": "https://placehold.co/400x300?text=GameBox+S", "prix": 310000, "qty": 10, "rate": 4.7, "devise": "XAF" },
        { "id": 8, "nom": "Manette Pro Wireless", "description": "Manette sans fil ergonomique", "img": "https://placehold.co/400x300?text=Manette+Pro", "prix": 25000, "qty": 60, "rate": 4.3, "devise": "XAF" },
        { "id": 9, "nom": "SSD NVMe 1TB", "description": "Stockage NVMe 1TB hautes performances", "img": "https://placehold.co/400x300?text=SSD+1TB", "prix": 70000, "qty": 34, "rate": 4.6, "devise": "XAF" },
        { "id": 10, "nom": "Casque Audio Bluetooth", "description": "Casque circum-aural avec réduction de bruit", "img": "https://placehold.co/400x300?text=Casque+Bluetooth", "prix": 38000, "qty": 28, "rate": 4.0, "devise": "XAF" },
        { "id": 11, "nom": "Chargeur Rapide 65W", "description": "Chargeur USB-C 65W PD", "img": "https://placehold.co/400x300?text=Chargeur+65W", "prix": 9000, "qty": 120, "rate": 4.2, "devise": "XAF" },
        { "id": 12, "nom": "Support TV Mural", "description": "Fixation murale inclinable pour téléviseur 32-65\"", "img": "https://placehold.co/400x300?text=Support+TV", "prix": 15000, "qty": 40, "rate": 3.9, "devise": "XAF" }
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
                { "id_prod": 1, "nom": "Ultrabook Pro 14\"", "prix": 595000, "qty": 1, "devise": "XAF" },
                { "id_prod": 11, "nom": "Chargeur Rapide 65W", "prix": 9000, "qty": 1, "devise": "XAF" }
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
        { "id": 1001, "id_panier": 1, "date": "2025-10-05T10:12:00Z", "status": "paid", "total": 604000, "devise": "XAF" },
        { "id": 1002, "id_panier": 2, "date": "2025-10-07T15:30:00Z", "status": "pending", "total": 230000, "devise": "XAF" },
        { "id": 1003, "id_panier": 3, "date": "2025-10-08T08:45:00Z", "status": "processing", "total": 520000, "devise": "XAF" }
    ]
}
