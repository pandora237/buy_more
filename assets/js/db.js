const db = {
    "categories": [
        { "id": 1, "title": "Informatique", "description": "Ordinateurs, portables, périphériques et composants.", icon: 'qrcode', "img": "/assets/img/category/developpement-informatique.jpg" },
        { "id": 2, "title": "Téléphonie & Tablettes", "description": "Smartphones, tablettes et accessoires mobiles.", icon: 'phone', "img": "/assets/img/category/modio-tablette-m791-128gb-ram-4gb-600x600.jpg" },
        { "id": 3, "title": "TV & Multimédia", "description": "Téléviseurs, systèmes audio et accessoires multimédia.", icon: 'tv', "img": "/assets/img/category/apple-tv-4k-tv-plus-221018.jpg" },
        { "id": 4, "title": "Jeux & Consoles", "description": "Consoles, jeux vidéo et manettes.", icon: 'gamepad', "img": "/assets/img/category/consoles.webp" }
    ],

    "products": [
        {
            "id": 1,
            "nom": "Ultrabook Pro 14\"",
            "description": "L’Ultrabook Pro 14\" combine puissance et élégance. Équipé d’un processeur Intel Core i7 de 11e génération, de 16 Go de RAM et d’un SSD ultra-rapide de 512 Go, il assure des performances fluides pour le travail, le multimédia et le divertissement. Son écran Full HD 14\" aux bords fins offre une expérience visuelle immersive, tandis que sa conception légère en aluminium le rend idéal pour les professionnels en déplacement.",
            "img": "/assets/img/allProducts/P9Y25hhEzgbl9OQL-1024x669.png",
            "img_collection": [
                "/assets/img/allProducts/1/1.jpg",
                "/assets/img/allProducts/1/2.jpg",
                "/assets/img/allProducts/1/3.jpg",
            ],
            "prix": 595000,
            "qty": 12,
            "rate": 4.6,
            "devise": "XAF",
            "date_add": "2025-01-17",
            "reduction": 10
        },
        {
            "id": 2,
            "nom": "Souris Gaming X300",
            "description": "Conçue pour les gamers exigeants, la Souris Gaming X300 offre une précision exceptionnelle grâce à son capteur optique 16 000 DPI ajustable. Son design ergonomique assure une prise en main confortable pendant les longues sessions de jeu. Les boutons programmables et l’éclairage RGB personnalisable ajoutent une touche de style et de performance à votre setup gaming.",
            "img": "/assets/img/allProducts/71anfdyX2FL.png",
            "img_collection": [

            ],
            "prix": 12000,
            "qty": 45,
            "rate": 4.2,
            "devise": "XAF",
            "date_add": "2025-02-08",
            "reduction": 5
        },
        {
            "id": 3,
            "nom": "Smartphone Nova 12",
            "description": "Le Nova 12 combine design moderne et performance. Son écran AMOLED de 6.5 pouces offre des couleurs éclatantes et une grande fluidité. Avec ses 8 Go de RAM, 128 Go de stockage et son processeur octa-core, il garantit une navigation fluide et rapide. Sa caméra quadruple de 64 MP capture chaque instant avec précision, et sa batterie de 4500 mAh assure une autonomie d’une journée entière.",
            "img": "/assets/img/allProducts/huawei-nova-12-blk-al00-3.png",
            "img_collection": [
                "/assets/img/allProducts/huawei-nova-12-blk-al00-3.png",
                "/assets/img/allProducts/nova_12_front.png",
                "/assets/img/allProducts/nova_12_back.png"
            ],
            "prix": 180000,
            "qty": 25,
            "rate": 4.4,
            "devise": "XAF",
            "date_add": "2025-03-15",
            "reduction": 8
        },
        {
            "id": 4,
            "nom": "Tablette TabGo 10\"",
            "description": "La TabGo 10\" est la tablette idéale pour le multimédia, la lecture et les cours en ligne. Dotée d’un grand écran IPS de 10 pouces et d’un processeur quad-core, elle offre une expérience fluide pour la navigation, la vidéo et les applications éducatives. Sa batterie longue durée de 7000 mAh et son design léger la rendent parfaite pour une utilisation quotidienne.",
            "img": "/assets/img/allProducts/Oteeto-Brand-Tab-10-PRO-Tablet-PC-Portable-Small-Office-10inch-8-512-GB-with-Keyboard-WiFi-with-SIM-Card.avif",
            "img_collection": [
                "/assets/img/allProducts/Oteeto-Brand-Tab-10-PRO-Tablet-PC-Portable-Small-Office-10inch-8-512-GB-with-Keyboard-WiFi-with-SIM-Card.avif",
                "/assets/img/allProducts/tabgo10_front.png",
                "/assets/img/allProducts/tabgo10_keyboard.png"
            ],
            "prix": 95000,
            "qty": 18,
            "rate": 4.0,
            "devise": "XAF",
            "date_add": "2025-04-06",
            "reduction": 12
        },
        {
            "id": 5,
            "nom": "TV LED 55\" 4K",
            "description": "Découvrez une qualité d’image exceptionnelle avec cette TV LED 55\" 4K Ultra HD. Grâce à sa technologie HDR, chaque scène est plus détaillée et plus réaliste. Connectez facilement vos applications préférées grâce au système Smart TV intégré. Son design fin et élégant s’intègre parfaitement à votre salon pour une expérience cinéma à domicile.",
            "img": "/assets/img/allProducts/TV-TCL-55-Pouces-Smart-55P635.webp",
            "img_collection": [
                "/assets/img/allProducts/TV-TCL-55-Pouces-Smart-55P635.webp",
                "/assets/img/allProducts/tv_led_55_side.png",
                "/assets/img/allProducts/tv_led_55_remote.png"
            ],
            "prix": 420000,
            "qty": 7,
            "rate": 4.5,
            "devise": "XAF",
            "date_add": "2025-05-11",
            "reduction": 15
        },
        {
            "id": 6,
            "nom": "Barre Son HomeCinema",
            "description": "Plongez au cœur de vos films et musiques avec la Barre Son HomeCinema. Dotée d’une puissance de 300W et d’une connectivité Bluetooth, elle offre un son immersif et équilibré. Son design compact s’adapte à tous les espaces, tandis que ses modes audio ajustables améliorent chaque expérience sonore, du cinéma au gaming.",
            "img": "/assets/img/allProducts/51GSDvl7JKL.png",
            "img_collection": [
                "/assets/img/allProducts/51GSDvl7JKL.png",
                "/assets/img/allProducts/homecinema_side.png",
                "/assets/img/allProducts/homecinema_remote.png"
            ],
            "prix": 85000,
            "qty": 20,
            "rate": 4.1,
            "devise": "XAF",
            "date_add": "2025-06-02",
            "reduction": 10
        },
        {
            "id": 7,
            "nom": "Console GameBox S",
            "description": "La GameBox S redéfinit le jeu vidéo avec des graphismes de nouvelle génération et un stockage SSD de 1 To pour des chargements ultra-rapides. Son interface intuitive et sa compatibilité avec des centaines de jeux en ligne en font un choix incontournable pour les joueurs passionnés. Jouez, streamez et profitez d’un divertissement illimité.",
            "img": "/assets/img/allProducts/Super-Hot-Selling-400-in-1-Game-Console-Mini-Sup-Game-Player-Brand-New-100-Tested-Before-Shipping-Retro-Game-Box.avif",
            "img_collection": [
                "/assets/img/allProducts/Super-Hot-Selling-400-in-1-Game-Console-Mini-Sup-Game-Player-Brand-New-100-Tested-Before-Shipping-Retro-Game-Box.avif",
                "/assets/img/allProducts/gamebox_s_side.png",
                "/assets/img/allProducts/gamebox_s_controller.png"
            ],
            "prix": 310000,
            "qty": 10,
            "rate": 4.7,
            "devise": "XAF",
            "date_add": "2025-06-28",
            "reduction": 6
        },
        {
            "id": 8,
            "nom": "Manette Pro Wireless",
            "description": "Conçue pour la précision et le confort, la Manette Pro Wireless offre une connectivité sans fil stable et une autonomie de plus de 10 heures. Sa prise en main ergonomique et ses gâchettes réactives garantissent une expérience de jeu optimale sur console, PC ou smartphone.",
            "img": "/assets/img/allProducts/Bluetooth-Gamepad-for-Nintendo-Switch-PRO-Wireless-Controller-for-Ns-Switch-Video-Game-USB-Joystick-Control.avif",
            "img_collection": [
                "/assets/img/allProducts/Bluetooth-Gamepad-for-Nintendo-Switch-PRO-Wireless-Controller-for-Ns-Switch-Video-Game-USB-Joystick-Control.avif",
                "/assets/img/allProducts/manette_pro_wireless_top.png",
                "/assets/img/allProducts/manette_pro_wireless_back.png"
            ],
            "prix": 25000,
            "qty": 60,
            "rate": 4.3,
            "devise": "XAF",
            "date_add": "2025-07-16",
            "reduction": 5
        },
        {
            "id": 9,
            "nom": "SSD NVMe 1TB",
            "description": "Le SSD NVMe 1TB assure des vitesses de lecture et d’écriture jusqu’à 3500 Mo/s, idéales pour les professionnels, les gamers et les créateurs de contenu. Sa conception compacte et son interface PCIe 4.0 garantissent des performances inégalées et une meilleure réactivité de votre système.",
            "img": "/assets/img/allProducts/MZ-V9P1T0B-AM_S.COM_N01_HA_TH_V01.webp",
            "img_collection": [
                "/assets/img/allProducts/MZ-V9P1T0B-AM_S.COM_N01_HA_TH_V01.webp",
                "/assets/img/allProducts/ssd_nvme_1tb_box.png",
                "/assets/img/allProducts/ssd_nvme_1tb_closeup.png"
            ],
            "prix": 70000,
            "qty": 34,
            "rate": 4.6,
            "devise": "XAF",
            "date_add": "2025-08-09",
            "reduction": 7
        },
        {
            "id": 10,
            "nom": "Casque Audio Bluetooth",
            "description": "Profitez d’un son clair et puissant avec ce casque Bluetooth doté d’une réduction active du bruit. Son arceau ajustable et ses coussinets doux assurent un confort longue durée. Compatible avec tous les appareils Bluetooth, il offre jusqu’à 20 heures d’autonomie pour écouter votre musique en toute liberté.",
            "img": "/assets/img/allProducts/casque_sans_fil_-_oraimo_boompop_2s_-_i.png",
            "img_collection": [
                "/assets/img/allProducts/casque_sans_fil_-_oraimo_boompop_2s_-_i.png",
                "/assets/img/allProducts/casque_bluetooth_side.png",
                "/assets/img/allProducts/casque_bluetooth_folded.png"
            ],
            "prix": 38000,
            "qty": 28,
            "rate": 4.0,
            "devise": "XAF",
            "date_add": "2025-09-03",
            "reduction": 10
        },
        {
            "id": 11,
            "nom": "Chargeur Rapide 65W",
            "description": "Rechargez vos appareils à vitesse éclair grâce à ce chargeur rapide 65W compatible USB-C Power Delivery. Il détecte automatiquement le courant optimal pour chaque appareil, garantissant une charge sécurisée et efficace pour smartphones, tablettes et ordinateurs portables.",
            "img": "/assets/img/allProducts/filters_format(png)_upscale().png",
            "img_collection": [
                "/assets/img/allProducts/filters_format(png)_upscale().png",
                "/assets/img/allProducts/chargeur_65w_usb_c.png",
                "/assets/img/allProducts/chargeur_65w_box.png"
            ],
            "prix": 9000,
            "qty": 120,
            "rate": 4.2,
            "devise": "XAF",
            "date_add": "2025-09-24",
            "reduction": 3
        },
        {
            "id": 12,
            "nom": "Support TV Mural",
            "description": "Le support TV mural inclinable offre une installation sûre et pratique pour les téléviseurs de 32 à 65 pouces. Fabriqué en acier robuste, il permet d’ajuster facilement l’inclinaison pour un angle de vision optimal tout en économisant de l’espace dans votre salon.",
            "img": "/assets/img/allProducts/support-tv-mural-orientable-su-com.jpg",
            "img_collection": [
                "/assets/img/allProducts/support-tv-mural-orientable-su-com.jpg",
                "/assets/img/allProducts/support_tv_mural_side.png",
                "/assets/img/allProducts/support_tv_mural_mount.png"
            ],
            "prix": 15000,
            "qty": 40,
            "rate": 3.9,
            "devise": "XAF",
            "date_add": "2025-10-12",
            "reduction": 0
        }
    ]
    ,

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
