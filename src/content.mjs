const buffetPhoto = (file, alt, position) => ({ file, alt, position });

export const restaurant = {
  name: 'Wok World',
  slug: 'wokworld',
  city: 'Sintra',
  description: 'Sushi, teppanyaki e buffet livre em Sintra. Consulte a carta e reserve a sua mesa no Wok World.',
  address: ['Av. Movimento das Forças Armadas 128-A', '2710-432 Sintra, Portugal'],
  phone: '21 923 1208',
  phoneHref: 'tel:+351219231208',
  hours: ['12:00–15:00', '19:00–23:00'],
  hoursDays: 'Todos os dias',
  reservationPath: '/reservation',
  reservationWidgetUrl: 'https://reserve.intelis.pt/wokworld',
  googleRating: 4.3,
  googlePlaceUrl: 'https://www.google.com/maps/place/Wok+World/data=!4m2!3m1!1s0xd1edbf23106fc0f:0x2579ba2c8ed5b86',
  mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=Wok+World%2C+Av.+Movimento+das+For%C3%A7as+Armadas+128-A%2C+2710-432+Sintra',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.361754968247!2d-9.374767523164271!3d38.80126357174474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edbf23106fc0f%3A0x2579ba2c8ed5b86!2sWok%20World!5e0!3m2!1sen!2spt!4v1794143717896!5m2!1sen!2spt',
  social: [
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/wokworldsintra' },
    { name: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@wokworldsintra' },
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/p/Wok-World-100089409948084/' },
  ],
  images: {
    logo: 'logo',
    heroDesktop: 'hero-desktop',
    heroMobile: 'hero-storefront-portrait',
    reservation: 'reserve-card',
    reviewBackdrop: 'reviews-section',
  },
};

export const navigation = [
  { id: 'inicio', label: 'Início' },
  { id: 'buffet', label: 'Buffet' },
  { id: 'espaco', label: 'O espaço' },
  { id: 'informacoes', label: 'Informações' },
  { id: 'avaliacoes', label: 'Avaliações' },
];

export const foodRows = [
  [
    buffetPhoto('food-1', 'Seleção de sushi no balcão do buffet', '50% 60%'),
    buffetPhoto('food-2', 'Legumes e ingredientes frescos para a chapa', '50% 61%'),
    buffetPhoto('food-4', 'Camarões e pratos quentes no balcão', '50% 76%'),
    buffetPhoto('food-5', 'Brócolos e outros pratos quentes do buffet', '50% 70%'),
    buffetPhoto('food-8', 'Balcão de fruta fresca com uvas e manga', '50% 66%'),
  ],
  [
    buffetPhoto('food-7', 'Carnes e legumes frescos na bancada do teppanyaki', '50% 61%'),
    buffetPhoto('food-3', 'Balcão de pratos quentes com carnes e legumes', '50% 63%'),
    buffetPhoto('reserve-card', 'Rolos de sushi dispostos no balcão', '50% 68%'),
    buffetPhoto('food-6', 'Sopa e tabuleiros de pratos quentes', '50% 60%'),
    buffetPhoto('food-9', 'Fonte de chocolate e doces na mesa de sobremesas', '50% 62%'),
  ],
];

export const interiorPhotos = [
  buffetPhoto('space-1', 'Mesas postas e cadeiras de madeira na sala principal', '50% 55%'),
  buffetPhoto('space-2', 'Balcão de ingredientes frescos sob um teto de ripas', '50% 58%'),
  buffetPhoto('space-4', 'Flores suspensas em tons lilás na entrada', '50% 42%'),
  buffetPhoto('space-5', 'Cozinheiro a preparar legumes e carne na chapa', '50% 58%'),
  buffetPhoto('space-8', 'Sala de refeições com cadeiras de madeira e parede azul', '50% 55%'),
  buffetPhoto('space-3', 'Preparação de sushi à mão sobre uma esteira de bambu', '50% 55%'),
  buffetPhoto('space-6', 'Ilha de pratos quentes ao centro do restaurante', '50% 68%'),
  buffetPhoto('space-9', 'Mesa posta junto às janelas da sala', '50% 62%'),
];

export const buffet = {
  currency: '€',
  childAge: '4–9 anos',
  service: [
    { name: 'Almoço', detail: 'Segunda a sexta-feira', adult: 12.95, child: 7.95 },
    { name: 'Almoço', detail: 'Fins de semana e feriados', adult: 15.95, child: 8.95 },
    { name: 'Jantar', detail: 'Todos os dias', adult: 15.95, child: 8.95 },
  ],
  extras: [
    { name: 'Take Away', detail: 'Buffet para levar · por caixa', price: 8.95 },
    { name: 'Teppanyaki', detail: 'Grelhado na hora · mín. 3 variedades', price: 8.95 },
  ],
  notes: ['IVA incluído', 'Bebidas e café cobrados à parte', 'Desperdício alimentar · 25 €/kg'],
};

export const drinks = [
  [
    { name: 'Bebidas japonesas', items: [['Sakerina (quente ou frio)', 4], ['Cerveja japonesa', 3.5]] },
    { name: 'Cerveja e cocktails', items: [['Sagres / Super Bock', 1.95], ['Imperial caneca', 3.5], ['Cerveja chinesa', 3.5], ['Caipirinha', 4.9]] },
  ],
  [
    { name: 'Vinhos', items: [['Vinho da casa 1 L (tinto/branco)', 6.95], ['Borba 750 ml', 8.95], ['Monte Velho 750 ml', 10.95], ['Esporão Reserva 750 ml', 25.9]] },
    { name: 'Verde e rosé', items: [['Casal Garcia Verde 750 ml', 9.95], ['Mateus Rosé 750 ml', 11.95]] },
  ],
  [
    { name: 'Espumante e sangria', items: [['Bar Royal 750 ml', 8.95], ['Sangria 1 L (branca ou tinta)', 9.95]] },
    { name: 'Cafés e refrescos', items: [['Café', 1], ['Galão / Cappuccino', 1.5], ['Sumo de laranja natural', 3.5], ['Refrigerantes', 2.2]] },
  ],
];

export const reviews = [
  { name: 'Nélia', rating: 5, quote: 'Great food at a reasonable price for an all-you-can-eat. It has a lot of variety, including desserts.', quotePt: 'Comida ótima a um preço razoável para um buffet livre. Há muita variedade, incluindo sobremesas.', color: '#347964' },
  { name: 'Lamin', rating: 5, quote: 'Is my first time to there, but I like the place. The foods are good to my experience.', quotePt: 'Foi a minha primeira vez lá e gostei do espaço. Achei a comida boa.', color: '#7b33a1' },
  { name: 'Sherpa', rating: 5, quote: 'Clean and wonderful staff 😊 worth it 😊 everything is good. clean Bathroom. ...', quotePt: 'Espaço limpo e funcionários maravilhosos 😊 Vale a pena 😊 Tudo bom. Casa de banho limpa. ...', color: '#346aa1' },
  { name: 'Jared', rating: 5, quote: 'Wonderful experience', quotePt: 'Uma experiência maravilhosa', color: '#465a64' },
  { name: 'Mihai', rating: 5, quote: 'A very nice all you can eat restaurant', quotePt: 'Um restaurante de buffet livre muito agradável', color: '#785147' },
  { name: 'Lei', rating: 5, quote: 'Very tasty, staff member Very friendly', quotePt: 'Muito saboroso, pessoal muito simpático', color: '#027cad' },
];
