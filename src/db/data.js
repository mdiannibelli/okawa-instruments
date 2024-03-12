const guitarsProducts = [
    {
        id: 1,
        name: '1957 Les Paul Junior Single Cut, Vintage Sunburst, Murphy Lab Heavy Aged, Vintage Sunburst',
        price: "8000",
        priceDesc: '6499.00',
        img: '/guitars/1957-lespaul-junior.png',
        description: 'Mahogany body, mahogany neck with rosewood fretboard and 50s Rounded Medium C profile, Dogear P-90 pickup, Murphy Lab Heavy Aged Vintage Sunburst finish',
        finish: 'Vintage Sunburst',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/5QChjllWMCAA1BwWRKi6El/39c585bfdb4a8be5ac88ecf9a594a484/Vintage_Sunburst__Murphy_Lab_Heavy_Aged.png',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 2,
        name: '1964 ES-335 Reissue, Bigsby, Custom Made Plate, Murphy Lab Light Aged, 60s Cherry',
        price: "8000",
        priceDesc: '8099.00',
        img: '/guitars/1964-es-335.png',
        description: 'Semi-hollowbody, mahogany neck with 64 Medium C neck profile, rosewood fretboard with small block MOP inlays, Custombucker pickups, Bigsby vibrato and "Custom Made" plate, Murphy Lab Light Aged',
        finish: '60s Cherry',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/5LyRF92YTm9WahIcldyCrg/81a64cb9501ee633cf512767352a6a4b/Cherry_Murphy_Lab_-_NG.JPG',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 3,
        name: '1962 Les Paul SG Standard, Cherry, Short Maestro, Ebony Block, Murphy Lab Light Aged, Exclusive, Cherry',
        price: "8000",
        priceDesc: '6199.00',
        img: '/guitars/1962-lespaul-sg.png',
        description: 'Mahogany body, mahogany neck with rosewood fretboard and 60s SlimTaper profile, Ebony Block short Maestro Vibrola, 2 Custombuckers, Murphy Lab Light Aged',
        finish: 'Cherry',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/4UNvbKDH6Ec3d0CCP14twY/21099d6b26a32f58f4044806b757a337/Cherry__Murphy_Lab_Light_Aged.png',
        handedness: 'Right',
        category: 'SG',
        partner: 'Gibson'
    },
    {
        id: 4,
        name: 'Les Paul Standard 50s Figured Top, Translucent Fuchsia',
        price: "5000",
        priceDesc: '2799.00',
        img: '/guitars/lespaul-standard-50s.png',
        description: 'The Les Paul™ Standard 50s Figured Top returns to the classic design that made it relevant, played, and loved – shaping sound across generations and genres of music. It pays tribute to Gibsons Golden Era of Innovation and brings authenticity back to life. It boasts a solid mahogany body, an AA figured maple top, and a distinctive translucent custom color nitrocellulose lacquer finish that showcases the figured maple top. The mahogany neck has a rounded 50s Vintage profile and a rosewood fingerboard with trapezoid inlays. The Les Paul Standard 50s Figured Top is equipped with an ABR-1, the classic-style Tune-O-Matic™ bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and gold Top Hat knobs. The calibrated Burstbucker™ 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with Alnico 2 magnets and wired to audio taper potentiometers and Orange Drop® capacitors. A hardshell case is also included.',
        finish: 'Translucent Fuchsia',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/64QorrYJZuBYdG4CmCLFoU/8dfeeb192e1d6b79582c9d29476e4b91/Translucent_Fuschia.png',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 5,
        name: 'Les Paul Standard 60s Figured Top, Blueberry Burst',
        price: "5000",
        priceDesc: '2999.00',
        img: '/guitars/lespaul-standard-60s.png',
        description: 'The Les Paul™ Standard 60s Figured Top returns to the classic design that made it relevant, played, and loved – shaping sound across generations and genres of music. It pays tribute to Gibsons Golden Era of Innovation and brings authenticity back to life. The Les Paul Standard 60s Figured Top has a solid mahogany body with an AA figured maple top visible beneath the new head-turning translucent custom color nitrocellulose lacquer finish. The mahogany neck has a 60s-style SlimTaper™ profile and a rosewood fingerboard with trapezoid inlays. The Les Paul Standard 60s Figured Top is equipped with a classic ABR-1 Tune-O-Matic™ bridge, aluminum Stop Bar tailpiece, Grover® Rotomatic® "Kidney" tuners, and gold Top Hat knobs with silver reflectors. The 60s Burstbucker™ pickups are loaded with Alnico 5 magnets and wired to audio taper potentiometers and Orange Drop® capacitors. A hardshell case is also included.',
        finish: 'Blueberry Burst',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/54oMXSKudUWWX3ACqwbD3Z/480f9c04a0f9c7f6932ad549b2d363ba/__static.gibson.com_product-images_USA_USARIR238_Blueberry_Burst_Blueberry_Burst.jpg',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 6,
        name: 'Les Paul Standard 50s Faded, Vintage Honey Burst',
        price: "5000",
        priceDesc: '2499.00',
        img: '/guitars/lespaul-standard-50s-faded.png',
        description: 'The new Les Paul™ Standard 50s Faded returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibsons Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50s features a satin nitrocellulose lacquer finish that gives it the look and feel of a long-treasured musical companion. It has a solid mahogany body with an AA figured maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. Its equipped with an ABR-1 Tune-O-Matic bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and gold Top Hat knobs with dial pointers. The open-coil Burstbucker™ 1 (neck) and Burstbucker 2 (bridge) pickups are hand-wired to audio taper potentiometers and Orange Drop® capacitors.',
        finish: 'Vintage Honey Burst',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/gSTG7R27bgnVYmlY6nxHt/adb127a4a8508a50e0e40265522fc522/Vintage_Honey_Burst.PNG',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 7,
        name: 'Les Paul Standard 60s Faded, Vintage Cherry Sunburst',
        price: "5000",
        priceDesc: '2499.00',
        img: '/guitars/lespaul-standard-60s-faded.png',
        description: 'The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibsons Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 60s features a satin nitrocellulose lacquer finish that gives it the look and feel of a long-treasured musical companion. It has a solid mahogany body with an AA figured maple top and a SlimTaper™ 60s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. Its equipped with an ABR-1 Tune-O-Matic™ bridge, aluminum Stop Bar tailpiece, Grover® Rotomatic "Kidney" tuners, and gold Top Hat knobs with Silver Reflectors and Dial Pointers. The open-coil 60s Burstbucker™ pickups are loaded with Alnico 5 magnets and hand-wired to audio taper potentiometers and Orange Drop® capacitors.',
        finish: 'Vintage Cherry Sunburst',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/1YqlO7SUjDWP0jM1tBqmVb/9154ec4f3aa91acf94db476a057c5ea0/__static.gibson.com_product-images_Acoustic_ACCN8H793_Vintage_Cherry_Sunburst_Vintage_Cherry_Sunburst.jpg',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 8,
        name: 'Les Paul Standard 50s, Heritage Cherry Sunburst',
        price: "5000",
        priceDesc: '2999.00',
        img: '/guitars/lespaul-standard-50s-cherry.png',
        description: 'The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved – shaping sound across generations and genres of music. It pays tribute to Gibsons Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50s has a solid mahogany body with a maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. Its equipped with an ABR-1, the classic-style Tune-O-Matic™ bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and aged gold Top Hat knobs. The calibrated Burstbucker™ 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with Alnico 2 magnets and wired with audio taper potentiometers and Orange Drop® capacitors.',
        finish: 'Heritage Cherry Sunburst',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/6FFMEKJXRlliRXe2KM7xKp/d70cc4b784d0542938a4f458d8a78ceb/__static.gibson.com_product-images_Demo_DMOEUU944_Heritage_Cherry_Sunburst_Heritage_Cherry_Sunburst.jpg',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 9,
        name: 'Les Paul Standard 50s P-90, Tobacco Burst',
        price: "5000",
        priceDesc: '2799.00',
        img: '/guitars/lespaul-standard-50s-p90.png',
        description: 'The new Les Paul Standard returns to the classic design that made it famous. It pays tribute to Gibsons Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50s P-90 has a solid mahogany body with a maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. Its equipped with an ABR-1, the classic-style Tune-O-Matic™ bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and Top Hat knobs. The classic P-90 pickups (neck and bridge) are loaded with Alnico 5 magnets, audio taper potentiometers, and Orange Drop® capacitors.',
        finish: 'Tobacco Burst',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/5nhegDB5SGFPIXx9L3byQL/70ada9c6a5164269e887c63e103569d2/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_thumbnail.png',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 10,
        name: 'American Vintage II Stratocaster® 1954 70° Aniversario',
        price: "5000",
        priceDesc: '2999.00',
        img: '/guitars/fender-american-vintage.jpg',
        description: `En Fender® celebramos las siete décadas de tono atemporal y estilo único de la Stratocaster® con la colección especial 70° Aniversario. Cada modelo Stratocaster 70° Aniversario reproduce los sonidos tan legendarios que han hecho de la Strat® un icono sin igual en el mundo de la guitarra. Estos instrumentos son del agrado tanto de los músicos que buscan una Strat de tipo vintage, como de los guitarristas modernos que quieren una guitarra versátil con la que tocar la música actual. La colección Stratocaster 70° Aniversario es fiel a la historia de Fender®.

        La American Vintage II 1954 Stratocaster se basa en una leyenda, en la primera Strat de la historia. Este modelo 70° Aniversario está construido con un cuerpo de 2 piezas de fresno especialmente resonante, con acabado en laca de nitrocelulosa. Esta guitarra tiene un encanto vintage muy especial. El mástil de arce de una pieza, junto al radio del diapasón de 7,25" (184,15 mm), y a los trastes vintage, proporcionan a los músicos el tacto tan suave que infinidad de guitarristas han sentido durante décadas en las Strat®. Las pastillas single-coil 1954 Strat® 70° Aniversario reproducen los auténticos sonidos de las guitarras de los años 50, con una excelente combinación entre brillo y contundencia sonora. Esta Strat® es fiel a la época, ya que equipa un puente con bloque y selletas de acero con sistema de trémolo sincronizado, clavijeros "Pure Vintage" o un golpeador de una sola capa, con las cubiertas de las pastillas y los controles como los de las guitarras de 1954. En el estuche de tweed de estilo vintage, los músicos encontrarán además un montón de interesantes accesorios. Este modelo de edición limitada captura la esencia de la Stratocaster® original y es el instrumento perfecto para coleccionistas y entusiastas de Fender®.
        
        Los instrumentos de la colección Stratocaster 70° Aniversario están disponibles en unidades limitadas, por lo que te recomendamos que si quieres una de estas Stratocaster 70° Aniversario, la compres lo antes posible.`,
        finish: 'Sunburst',
        color: 'https://i.gyazo.com/be5f2e58d458d03c2ec898948c313004.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 11,
        name: 'American Ultra Stratocaster® HSS 70° Aniversario',
        price: "5000",
        priceDesc: '2999.00',
        img: '/guitars/fender-american-ultra.jpg',
        description: `En Fender® celebramos las siete décadas de tono atemporal y estilo único de la Stratocaster® con la colección especial 70° Aniversario. Cada modelo Stratocaster 70° Aniversario reproduce los sonidos tan legendarios que han hecho de la Strat® un icono sin igual en el mundo de la guitarra. Estos instrumentos son del agrado tanto de los músicos que buscan una Strat de tipo vintage, como de los guitarristas modernos que quieren una guitarra versátil con la que tocar la música actual. La colección Stratocaster 70° Aniversario es fiel a la historia de Fender®.

        La American Ultra Stratocaster HSS 70° Aniversario le ofrece a los músicos una versatilidad sonora y una comodidad sin igual. Es además un instrumento con un look único, ya que cuenta con un cuerpo de aliso en color Amethyst, que varía en función de la luz. La American Ultra Stratocaster HSS 70° Aniversario tiene un mástil con los bordes del diapasón redondeados y un perfil único "Modern D" que resulta especialmente cómodo. El arce tostado elegido para el mástil garantiza una estabilidad sonora absoluta y una resonancia ampliada, mientras que el nuevo talón mejora considerablemente el acceso a los últimos trastes. El radio compuesto del diapasón de 10" - 14" (254 mm - 355,6 mm), los 22 trastes medium-jumbo, y los contornos esculpidos del cuerpo, permiten tocar sin esfuerzo a gran velocidad en toda la longitud del mástil. Las pastillas single-coil Ultra Noiseless™ Strat® 70° Aniversario y la humbucker Ultra Quadra Tap™ 70° Aniversario, junto con las opciones avanzadas de cableado, les poporcionan infinitas posibilidades sonoras a los guitarristas, y todo ello, con una excelente claridad musical y sin ruidos de fondo. Este modelo cuenta con muchas otras características destacadas, como el puente Ultra de 2 puntos con sistema de trémolo, los clavijeros con bloqueo, los herrajes cromados o la cejuela de hueso. Esta guitarra incluye de serie un estuche Black Tweed de estilo vintage. Con la American Ultra Stratocaster HSS 70° Aniversario tendrás a tu disposición un instrumento versátil y pensado para llevar tu interpretación a un nuevo nivel.
        
        Los instrumentos de la colección Stratocaster 70° Aniversario están disponibles en unidades limitadas, por lo que te recomendamos que si quieres una de estas Stratocaster 70° Aniversario, la compres lo antes posible.`,
        finish: 'Amethyst',
        color: 'https://i.gyazo.com/1c09d1551ceb1a51a57b9fd588f2d1ea.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 12,
        name: 'American Professional II Stratocaster® 70º Aniversario',
        price: "5000",
        priceDesc: '2359.00',
        img: '/guitars/fender-american-profesional.jpg',
        description: `Presentamos la colección Stratocaster® 70º Aniversario: Estas guitarras celebran las siete décadas de tono atemporal y estilo icónico de las Strat. Cada modelo Stratocaster de esta edición 70º Aniversario cuenta con las principales características que hicieron tan popular a este instrumento, y por supuesto, con los sonidos legendarios que convirtieron a la Strat® en un icono sin igual. Tanto los músicos más puristas de lo vintage, como los guitarristas progresivos que buscan prestaciones de vanguardia, encontrarán en esta colección un modelo que cumplirá con sus expectativas. Cada guitarra 70º Aniversario es fiel al legado de la Stratocaster y conmemora la gran historia de Fender®.

        Con la American Professional II Stratocaster 70º Aniversario los músicos llevarán su interpretación a un nuevo nivel. El cuerpo de aliso, la impresionante tapa de arce flameado y el acabado Comet Burst, dotan a la guitarra de elegancia y clase. Este modelo equipa las pastillas single-coil Strat® V-Mod II 70º Aniversario, con el objetivo de ofrecer sonidos que respeten al máximo la dinámica y expresividad de los guitarristas. El mástil en forma de "Deep C" tiene los bordes del diapasón redondeados y cuenta con un acabado satinado "Super-Natural" y un nuevo talón para conseguir un excelente nivel de comodidad, así como un fácil acceso a los últimos trastes. El puente mejorado con sistema de trémolo de 2 puntos y bloque de acero, aumenta el sustain, la claridad y el característico brillo de la Strat en las notas más agudas. Los clavijeros Deluxe con bloqueo garantizan la máxima estabilidad de afinación. La American Pro II Stratocaster ofrece a los músicos una familiaridad instantánea y una increíble versatilidad sonora que convierten al modelo en un nuevo estándar entre los instrumentos profesionales. El estuche Inca Silver ABS con el interior adaptado a la forma de la guitarra, proporciona una protección fiable para esta Stratocaster tan especial.
        
        Los instrumentos de la Colección Stratocaster 70º Aniversario están disponibles en unidades limitadas, por lo que recomendamos que los músicos interesados en este modelo, reserven su guitarra lo antes posible.`,
        finish: 'Arce Flameado',
        color: 'https://i.gyazo.com/be8ecdd18e661df38cb4f0bcff00532e.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 13,
        name: 'Stratocaster® Bruno Mars de Edición Limitada',
        price: "5000",
        priceDesc: '3479.00',
        img: '/guitars/fender-bruno-mars.jpg',
        description: `Canaliza tu magia interior de 24K con la elegante e irresistible Stratocaster® Bruno Mars de Edición Limitada.

        La Stratocaster® Bruno Mars de Edición Limitada tiene un cuerpo de fresno de alta resonancia y además adopta los contornos esculpidos del cuerpo de nuestra serie American Ultra para conseguir un nivel de comodidad superior y un acceso muy sencillo a las notas altas del diapasón. El acabado de laca de nitrocelulosa Mars Mocha Heirloom™ le proporciona al instrumento un look elegantemente envejecido, a la vez que dota a la guitarra de la máxima resonancia y de un tono puro. El diapasón de arce con radio compuesto de 9,5"-12" (241 mm - 305 mm) junto con los trastes de acero inoxidable, proporciona a los músicos un tacto sedoso y suave para así alcanzar un excelente nivel de articulación y una comodidad inigualables. Con las pastillas custom Stratocaster® Bruno Mars se consiguen los sonidos favoritos del artista sin alterar el brillo y el tono clásico que se espera de una Strat®. El puente con trémolo sincronizado de 2 puntos y los clavijeros Deluxe con sistema de bloqueo le proporciona a los músicos una estabilidad de afinación mejorada con prestaciones modernas. Los herrajes Heirloom™Aged Gold le dan a esta guitarra de alto rendimiento la apariencia y la sensación de estar ante un instrumento del más alto nivel que ha sido bien usado y conservado durante años. Con la guitarra también se incluye una correa personalizada con estampado de leopardo y un golpeador mint green de 3 capas.
        
        Estamos ante un modelo tan completo y electrizante como el artista al que representa. La Stratocaster® Bruno Mars de Edición Limitada es un instrumento imprescindible para los guitarristas que buscan conseguir el clásico brillo sonoro de las Strat® y que quieren disfrutar de un tacto sedoso y muy suave.`,
        finish: 'Mars Mocha Heirloom',
        color: 'https://i.gyazo.com/528078bdcfbb7f39dfd51b2a30c034cc.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 14,
        name: 'Player Stratocaster®, Anniversary 2-Color Sunburst',
        price: "2500",
        priceDesc: '809.00',
        img: '/guitars/fender-player-stratocaster.jpg',
        description: `El sonido inspirador de una Stratocaster es uno de los fundamentos de Fender. Con este clásico sonido de agudos campanilleantes, medios pronunciados y bajos robustos, combinados con una articulación cristalina, la Player Stratocaster está repleta de auténtico estilo y sensación Fender. Está lista para hacer realidad tus ideas musicales, es lo suficientemente versátil para cualquier estilo de música y es la plataforma perfecta para crear tu propio sonido.`,
        finish: 'Sunburst',
        color: 'https://i.gyazo.com/be5f2e58d458d03c2ec898948c313004.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 15,
        name: 'Limited Edition American Professional II Stratocaster®, Ebony Fingerboard with Black Headstock, Candy Apple Red',
        price: "2500",
        priceDesc: '2179.00',
        img: '/guitars/fender-limited-edition.jpg',
        description: `The American Professional II Stratocaster® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today's working player.

        Our popular Deep "C" neck now sports smooth rolled fingerboard edges, a "Super-Natural" satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Stratocaster single-coil pickups are more articulate than ever while retaining bell-like chime and warmth. An upgraded 2-point tremolo with a cold-rolled steel block increases sustain, clarity and high-end sparkle.
        
        The American Pro II Stratocaster delivers instant familiarity and sonic versatility you'll feel and hear right away, with broad ranging improvements that add up to nothing less than a new standard for professional instruments.`,
        finish: 'Candy Apple Red',
        color: 'https://i.gyazo.com/ad5c49ac01e13cfed3a636f3af9030e6.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 16,
        name: 'American Vintage II 1961 Stratocaster®',
        price: "2500",
        priceDesc: '2489.00',
        img: '/guitars/fender-american-vintage-ii.jpg',
        description: `La serie Fender® American Vintage II presenta una versión notablemente precisa de los diseños revolucionarios que alteraron el curso de la historia musical. Construidos con cuerpos, mástiles y herrajes precisos de la época, acabados de primera calidad y pastillas específicas del año con una sonoridad meticulosa, cada instrumento captura la esencia de la auténtica artesanía y el tono de Fender.
        Durante finales de los años 50 y principios de los 60, la popularidad de los instrumentos musicales Fender floreció y, aunque la variedad de Fender se había ampliado para incluir muchos instrumentos nuevos y fantásticos, la Stratocaster® reinaba por encima de todo. Para 1961, la Stratocaster había adquirido una estética más refinada, con un Sunburst de 3 colores reformulado con un rojo más vibrante y un borde negro más audaz, rematado con un golpeador de 3 capas que acentuaba las curvas características de la Stratocaster.
        Con un cuerpo de aliso de primera calidad, un trío de pastillas Pure Vintage 1961 Stratocaster y un mástil de arce en forma de "C" mediano acoplado con un diapasón de palisandro de 7,25" de radio, la American Vintage II 1961 Stratocaster reproduce el tono y la sensación por excelencia de la original. Otras citas incluyen un trémolo sincronizado de precisión vintage con bloque de acero laminado en frío y monturas de acero doblado, sintonizadores "Fender Deluxe" de una sola línea y golpeador de 3 capas.
        
        Los instrumentos de la serie American Vintage II son descendientes directos de los Fender originales: diseñados para músicos con una gran apreciación por el tono y la sensación de Fender vintage y construidos con una calidad inigualable, hasta el último tornillo. Estas son las eléctricas Fender en su forma más pura: Fender American Vintage II, el material de las leyendas.`,
        finish: 'Fiesta Red',
        color: 'https://i.gyazo.com/5180e8af19fea7e9ed5e19c062d16c6e.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 17,
        name: 'Player Stratocaster® de Edición Limitada',
        price: "2500",
        priceDesc: '969.00',
        img: '/guitars/fender-player-stratocaster-limited-edition.jpg',
        description: 'El inspirador sonido de una Stratocaster es una de las bases de Fender. La Player Stratocaster es fiel al tono clásico de una Strat (agudos con un brillo especial, medios potentes y gran presencia de graves). Esta guitarra permite a los músicos tocar con una articulación cristalina, con gran precisión en todas sus notas, y cuenta con el auténtico feeling y el estilo de los instrumentos Fender. Esta Stratocaster es lo suficientemente versátil para tocar con ella todo tipo de estilos musicales. Es el instrumento perfecto con el que cada artista puede definir su sonido personal.',
        finish: 'Black',
        color: 'https://i.gyazo.com/6c9379e1a182b3facfbcbe4addfd3c31.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 18,
        name: 'American Ultra Stratocaster®, Sea Foam Green, de Edición Limitada',
        price: "5000",
        priceDesc: '2689.00',
        img: '/guitars/fender-american-ultra-sea.jpg',
        description: `La serie American Ultra está integrada por nuestras guitarras y bajos más avanzados. Son instrumentos pensados para los músicos modernos que demandan lo último en precisión, rendimiento y tono. La American Ultra Stratocaster tiene un mástil con el perfil en forma de "Modern D" y los bordes del diapasón redondeados para ofrecer la máxima comodidad a los músicos. El nuevo talón del mástil permite acceder con comodidad a los últimos trastes. El diapasón de radio compuesto de 10" - 14" (254 mm - 355,6 mm) sobre el que encontramos 22 trastes medium-jumbo es ideal para ejecutar solos a gran velocidad y con la máxima precisión. En el apartado electrónico, las pastillas single-coil Ultra Noiseless™ Vintage, junto con las opciones avanzadas de cableado, proporcionan infinitas posibilidades sonoras sin emitir ningún ruido de fondo. Además, esta Strat cuenta con un interruptor S-1, que al activarlo, añade la pastilla del mástil en cualquiera de las posiciones del selector. Los contornos rediseñados de la parte trasera del cuerpo son tan estéticos como funcionales. Esta guitarra tan versátil y vanguardista inspirará a cualquier guitarrista en la búsqueda de sus nuevos límites musicales.

        Entre otras características del modelo, podemos destacar los clavijeros con bloqueo, los herrajes cromados y la cejuela de hueso. Esta Stratocaster® incluye de serie un estuche rígido premium con el interior adaptado a la forma de la guitarra.`,
        finish: 'Sea Foam Green',
        color: 'https://i.gyazo.com/05be463742ad4b63f959c05a5eac5cf1.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 19,
        name: 'Player Plus Stratocaster® zurdos',
        price: "2500",
        priceDesc: '1079.00',
        img: '/guitars/fender-player-zurdo.jpg',
        description: `Fusionando el diseño clásico de Fender® con características centradas en el guitarrista y nuevos y emocionantes acabados, la Player Plus Stratocaster® ofrece una comodidad excelente y un estilo inconfundible.

        En el corazón de esta Strat® hay un trío de pastillas Player Plus Noiseless™: brillantes y sensibles al tacto, ofrecen el tono clásico de Strat sin zumbidos. Un potenciómetro push-pull en el control de tono agrega la pastilla del mástil para cambiar las posiciones 1 y 2 para dos sonidos que normalmente no se encuentran en una Strat®. El mástil sedoso satinado Modern "C" Player Plus Strat® se adapta a tu mano como un guante, con bordes suaves y redondeados para una comodidad suprema. El diapasón de 12” de radio y los 22 trastes médium jumbo facilitan la fluidez de los solos y bendings sin esfuerzo. Suave y receptivo, el trémolo de 2 puntos proporciona efectos de vibrato clásicos, mientras que los clavijeros de bloqueo brindan una afinación sólida y hacen que los cambios de cuerda sean rápidos y fáciles.
        
        Con el estilo clásico de Fender, funciones avanzadas y acabados nuevos e impresionantes, la Player Plus Stratocaster es la herramienta perfecta para despertar tu creatividad y destacar entre la multitud.`,
        finish: 'Olympic Pearl',
        color: 'https://i.gyazo.com/b4d21d16a44240bcc403276b95896ef8.png',
        handedness: 'Left',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 20,
        name: 'American Vintage II 1957 Stratocaster® Left-Hand',
        price: "2500",
        priceDesc: '2369.00',
        img: '/guitars/fender-american-vintage-zurda.jpg',
        description: `La serie Fender® American Vintage II presenta una versión notablemente precisa de los diseños revolucionarios que alteraron el curso de la historia musical. Construidos con cuerpos, mástiles y herrajes precisos de la época, acabados de primera calidad y pastillas específicas del año con una sonoridad meticulosa, cada instrumento captura la esencia de la auténtica artesanía y el tono de Fender.

        Con sus atractivas curvas, sonidos chispeantes y su innovador puente de trémolo, la nueva Stratocaster® de 1954 de Fender fue un fenómeno, diferente a todo lo que el mundo había visto antes. En 1957, la Stratocaster se había cristalizado en una obra maestra de mediados de siglo.
        
        Con un trío de pastillas Pure Vintage '57 Stratocaster, contornos de cuerpo amplios y un mástil en forma de "V" sumamente cómodo con un diapasón de arce de radio de 7.25 ", la American Vintage II 1957 Stratocaster reproduce el tono y la sensación por excelencia del original. Otras citas incluyen un trémolo sincronizado de precisión vintage con bloque de acero laminado en frío y monturas de acero doblado, clavijero "Fender Deluxe" en línea y un golpeador de una sola capa.
        
        Ofrecida en tres impresionantes acabados de laca de nitrocelulosa: 2-Color Sunburst y Sea Foam Green sobre aliso y Vintage Blonde sobre fresno, la American Vintage II 1957 Stratocaster celebra un verdadero ícono del diseño de instrumentos Fender.
        
        Los instrumentos de la serie American Vintage II son descendientes directos de los Fender originales: diseñados para músicos con una gran apreciación por el tono y la sensación de Fender vintage y construidos con una calidad inigualable, hasta el último tornillo. Estas son las eléctricas Fender en su forma más pura: Fender American Vintage II, el material de las leyendas.`,
        finish: 'Sunburst',
        color: 'https://i.gyazo.com/be5f2e58d458d03c2ec898948c313004.png',
        handedness: 'Left',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 21,
        name: 'American Vintage II 1961 Stratocaster® Left-Hand',
        price: "2500",
        priceDesc: '2389.00',
        img: '/guitars/fender-american-vintage-zurda-ii.jpg',
        description: `La serie Fender® American Vintage II presenta una versión notablemente precisa de los diseños revolucionarios que alteraron el curso de la historia musical. Construidos con cuerpos, mástiles y herrajes precisos de la época, acabados de primera calidad y pastillas específicas del año con una sonoridad meticulosa, cada instrumento captura la esencia de la auténtica artesanía y el tono de Fender.
        Durante finales de los años 50 y principios de los 60, la popularidad de los instrumentos musicales Fender floreció y, aunque la variedad de Fender se había ampliado para incluir muchos instrumentos nuevos y fantásticos, la Stratocaster® reinaba por encima de todo. Para 1961, la Stratocaster había adquirido una estética más refinada, con un Sunburst de 3 colores reformulado con un rojo más vibrante y un borde negro más audaz, rematado con un golpeador de 3 capas que acentuaba las curvas características de la Stratocaster.
        Con un cuerpo de aliso de primera calidad, un trío de pastillas Pure Vintage 1961 Stratocaster y un mástil de arce en forma de "C" mediano acoplado con un diapasón de palisandro de 7,25" de radio, la American Vintage II 1961 Stratocaster reproduce el tono y la sensación por excelencia de la original. Otras citas incluyen un trémolo sincronizado de precisión vintage con bloque de acero laminado en frío y monturas de acero doblado, sintonizadores "Fender Deluxe" de una sola línea y golpeador de 3 capas.
        
        Los instrumentos de la serie American Vintage II son descendientes directos de los Fender originales: diseñados para músicos con una gran apreciación por el tono y la sensación de Fender vintage y construidos con una calidad inigualable, hasta el último tornillo. Estas son las eléctricas Fender en su forma más pura: Fender American Vintage II, el material de las leyendas.`,
        finish: 'Olympic White',
        color: 'https://i.gyazo.com/ed6f36a526b66282e38b7a9c990a80e3.png',
        handedness: 'Left',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 22,
        name: 'American Professional II Stratocaster® Left-Hand',
        price: "2500",
        priceDesc: '2169.00',
        img: '/guitars/fender-american-profesional-ii.jpg',
        description: `La American Professional II Stratocaster® se basa en más de sesenta años de innovación, inspiración y evolución para satisfacer las demandas del músico de hoy en día.

        Nuestro popular mástil “Deep C" ahora tiene bordes de diapasón redondeados, un acabado satinado "Super-Natural" y un talón de mástil recién esculpido para una sensación sumamente cómoda y de fácil acceso al registro superior. Las nuevas pastillas de bobina simple V-Mod II Stratocaster son más articuladas que nunca y conservan la calidez y el timbre de campana. Un trémolo mejorado de 2 puntos con un bloque de acero laminado en frío aumenta el sustain, la claridad y el brillo de alta gama.
        
        La American Pro II Stratocaster tiene al sonido y sensación clásicos pero con amplias mejoras que se suman a las habituales para marcar un nuevo estándar para instrumentos profesionales.`,
        finish: 'Dark Night',
        color: 'https://i.gyazo.com/a58b5c3a7b10546218ac85407c8859e7.png',
        handedness: 'Left',
        category: 'Stratocaster',
        partner: 'Fender'
    },
    {
        id: 23,
        name: 'Limited Edition American Ultra Telecaster®, Umbra',
        price: "5000",
        priceDesc: '2849.00',
        img: '/guitars/telecaster-limited-edition.jpg',
        description: `La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Telecaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.`,
        finish: 'Red Wood',
        color: 'https://i.gyazo.com/0452474819498d7d06bf903f2f1821a1.png',
        handedness: 'Right',
        category: 'Telecaster',
        partner: 'Fender'
    },
    {
        id: 24,
        name: 'Acoustasonic® Player Telecaster®',
        price: "2500",
        priceDesc: '1119.00',
        img: '/guitars/acoustasonic.jpg',
        description: 'La American Acoustasonic ™ Telecaster® encarna el espíritu de innovación sobre el que se construyó Fender. Desde un sonido auténticamente acústico hasta los tonos de ritmo eléctrico, esta poderosa guitarra ofrece una nueva expresión sonora diseñada por Fender y Fishman® tanto para el estudio como para el escenario.',
        finish: 'Sunburst',
        color: 'https://i.gyazo.com/be5f2e58d458d03c2ec898948c313004.png',
        handedness: 'Right',
        category: 'Telecaster',
        partner: 'Fender'
    },
    {
        id: 25,
        name: 'Telecaster® Thinline Vintera® II 60s',
        price: "2500",
        priceDesc: '1209.00',
        img: '/guitars/telecaster-thinline.jpg',
        description: `Revive el sonido atemporal de los años 60 con la Vintera® II '60s Telecaster® Thinline y experimenta la apariencia icónica, la sensación inspiradora y el tono incomparable que solo un Fender puede ofrecer.

        La Vintera® II '60s Telecaster® Thinline cuenta con un cuerpo de fresno semihueco y un mástil de arce para un tono clásico de Fender que está lleno de pegada y claridad con una resonancia y profundidad aireadas y abiertas, similares a las de una acústica. El mástil en forma de "C" de finales de los años 60 está cómodamente redondeado para una sensación intuitiva y acogedora, mientras que el diapasón de radio de 7,25" con trastes altos vintage brinda comodidad vintage con amplio espacio para bendings grandes y vibrato expresivo. Debajo del capó, encontrarás un par de pastillas de estilo vintage de los años 60 que ofrecen todo el timbre cristalino y el sonido crudo y acerado que hizo famoso a Fender. El puente de 3 selletas de estilo vintage con selletas de acero ranuradas ofrece un auténtico sonido de los años 60, mientras que los clavijeros de estilo vintage brindan una apariencia clásica con una relación de transmisión más fina y una estabilidad de afinación mejorada para completar el paquete.
        
        ¡Experimenta la inconfundible sensación vintage y el sonido incomparable de una Fender clásica con la Vintera® II '60s Telecaster® Thinline hoy y comienza a hacer historia en la música!`,
        finish: 'Black',
        color: 'https://i.gyazo.com/6c9379e1a182b3facfbcbe4addfd3c31.png',
        handedness: 'Right',
        category: 'Telecaster',
        partner: 'Fender'
    },
    {
        id: 26,
        name: 'Joe Strummer Telecaster®',
        price: "2500",
        priceDesc: '1749.00',
        img: '/guitars/joe-strummer.jpg',
        description: `Como líder y compositor principal de la legendaria banda de punk, The Clash, Joe Strummer creó una marca de punk-rock ardiente y llena de pasión que catapultó a la banda a la historia del rock and roll. La sensibilidad musical rebelde de Strummer inyectó las canciones de la banda con un inusual potencial para la época.

        Para capturar la vibración del desgastado modelo '66 de Joe, la Joe Strummer Telecaster® presenta un cuerpo de aliso con acabado de laca Road Worn®, un mástil de arce en forma de "C" de mediados de los 60 con un radio de 7.25 "diapasón de palisandro y un conjunto de pastillas Joe Strummer Telecaster® personalizadas. Otras características incluyen un puente Telecaster® de 6 selletas de estilo vintage, un golpeador de pergamino de 3 capas correcto para la época, clavijas de estilo vintage y una placa de mástil personalizada, todo con el acabado Road Worn® de Fender para completar el look.`,
        finish: 'Black',
        color: 'https://i.gyazo.com/6c9379e1a182b3facfbcbe4addfd3c31.png',
        handedness: 'Right',
        category: 'Telecaster',
        partner: 'Fender'
    },
    {
        id: 27,
        name: 'Made in Japan Traditional 50s Telecaster® Left-Handed',
        price: "2500",
        priceDesc: '1499.00',
        img: '/guitars/telecaster-japan.jpg',
        description: `Made in Japan Traditional series derived by combining the aesthetics of Fender's traditional musical instrument production with the sophisticated craftsmanship of Japan. Fender's orthodox DNA is a reliable Made in Japan quality. I will be resurrected. Made in Japan Traditional '50s Telecaster® Left-Handed has a gloss finish basswood body. A 9.5-inch radius "U" shaped maple neck with 21 vintage-style frets provides a classic performance that is unique to the Traditional series. A vintage-style Sting-Through-Body bridge with three brass saddles, and the original pickups selected for the Traditional series play a realistic and musical vintage tone. The narrowly designed nut width makes it easy for Japanese players to play. Solid guitar craftsmanship and flexible answers to player needs are reflected in this series.`,
        finish: 'Solid Wood',
        color: 'https://i.gyazo.com/7a87c731951496360a5cbf41e9c72fa0.png',
        handedness: 'Left',
        category: 'Telecaster',
        partner: 'Fender'
    },
    {
        id: 28,
        name: 'ES-345, Gold Hardware - Wine Red, Exclusive',
        price: "5000",
        priceDesc: '3899.00',
        img: '/guitars/es-345.png',
        description: `The Gibson ES-345 boasts a number of aesthetic enhancements over the flagship ES-335. Crafted with a maple centerblock and quarter-sawn Adirondack spruce bracing, players will be impressed by the lightweight feel and expanded range of tonal capabilities. The body is wrapped in multi-ply binding and the bound fingerboard has Split Parallelogram inlays exclusive to this model in the ES™ series. The ES-345 is equipped with a variety of high-end appointments like our hand-wired control assembly with Orange Drop® capacitors, Gibson's new Calibrated T-Type humbucking pickups, Vintage Deluxe style tuners and lightweight aluminum ABR-1 bridge and Stop Bar tailpiece anchored with steel thumb-wheels and studs. The ES-345 can be finished in either a vintage antiqued gloss Sixties Cherry or Vintage Burst.`,
        finish: 'Wine Red',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/2osFGPDYoRNI5CvHyBXlA3/0703360ae165ff243edeca1dac0547d9/__static.gibson.com_product-images_Epiphone_EPI1TY333_Dark_Wine_Red_Wine_Red.jpg',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 29,
        name: 'SG Supreme - Fireburst',
        price: "5000",
        priceDesc: '3499.00',
        img: '/guitars/sg-sunburst.png',
        description: `Gibson is excited to announce the return of the SG™ Supreme. With a refreshed feature set, it is bound to overshadow everything else in sight and be one of the most exciting new releases of the year. It features a beautiful AAA-figured maple top (plain maple on the 3-pickup Gibson exclusive model) on a mahogany body. The mahogany neck has an ebony fretboard with a compound radius, 24 medium jumbo frets, and Super Split Block mother-of-pearl inlays. The headstock is adorned with a striking new mother-of-pearl "Chandelier Inlay" inspired by a design from the 1940s that was discovered in the Gibson archives. The Burstbucker™ Pro and Burstbucker Pro + pickups are paired with push/pull volume controls for coil tapping, along with individual tone controls (master tone control on the 3-pickup exclusive model). The three beautiful finishes are elegantly highlighted with gold hardware, making this not only a great-sounding and highly flexible instrument but also an exceptionally beautiful-looking modern rock machine. A hardshell case is also included. `,
        finish: 'Fireburst',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/0vaxV31R39Xra6P3659lKT/617c1e6c6992946cba9c2bca0aed9dc5/__static.gibson.com_product-images_Epiphone_EPIB4J646_Fireburst_Fireburst.jpg',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 30,
        name: 'Les Paul Modern Studio - Wine Red Satin',
        price: "2500",
        priceDesc: '1999.00',
        img: '/guitars/lespaul-studio.png',
        description: `For years, the Les Paul™ Studio has been the choice of countless guitarists who appreciate the combination of an Ultra Modern weight-relieved mahogany body and maple cap paired with simplified cosmetic appointments. This cherished model has now been refined as the Les Paul Modern Studio. It incorporates improvements and enhanced features, many taken directly from the Les Paul Modern, including a bound ebony fretboard with a compound radius for improved action and playability, a Modern Contoured Heel for exceptional upper-fret access, black nickel hardware, and in addition to coil tapping, additional switching for control over phase and pure bypass. A soft shell case is included with this no-nonsense, high-performance tone machine.`,
        finish: 'Wine Red',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/2osFGPDYoRNI5CvHyBXlA3/0703360ae165ff243edeca1dac0547d9/__static.gibson.com_product-images_Epiphone_EPI1TY333_Dark_Wine_Red_Wine_Red.jpg',
        handedness: 'Right',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 31,
        name: '1959 ES-335 Reissue Brunswick Blue Light Aged (Left-Handed) - Brunswick Blue',
        price: "10000",
        priceDesc: '12589.00',
        img: '/guitars/1959-left.png',
        description: `The Historic Reissue ES-335 is back and better than ever, thanks to a year of studying, scanning, and listening to original examples. The expert craftspeople at Gibson Custom Shop have rendered every contour, profile, inlay, and color of the priceless vintage models in magnificent detail. The result is a playing and ownership experience that will keep you coming back for more. The 1959 ES™ Reissue models feature rounded cutaways, Medium C-shape neck profiles scanned from originals, dot inlays, and vintage-replica parts. It also features Light Aging by the skilled artisans of the Murphy Lab. The Murphy Lab Light Aged finish treatment, paired with lightly aged hardware, simulates decades of light play wear, giving it the unique character, vibe, and feel of an original example from the Gibson Golden Era. `,
        finish: 'Brunswick Blue',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/5kRR2OithHQNtFGesNVtBr/b2b24b15c67bf2334f0796a2b99ab407/RAM019784-swatch.jpg',
        handedness: 'Left',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 32,
        name: 'Tony Iommi SG Special (Left-Handed) - Vintage Cherry',
        price: "2500",
        priceDesc: '2399.00',
        img: '/guitars/sg-left.png',
        description: `Tony Iommi's iconic riffs, heavy tones, and massively influential albums created the blueprint for heavy metal and many other genres to follow. His career, like the man himself, is universally loved and revered. And while his innovative tuning and playing styles were a major part of his monstrous tones, a heavily modified 1964 Gibson SG was at the center of it all. Now Gibson USA has made a guitar based on the iconic original that launched countless heavy riffs, with a mahogany body, bound mahogany neck with a rounded profile, Indian rosewood fretboard with 22 frets, a Graph Tech® nut, Grover® Rotomatic® tuners with contemporary style buttons, and chrome-covered P-90 pickups. A reproduction of Tony's "Monkey" sticker is included in the case, along with two longer intonation adjustment screws in case you need additional adjustment range. A right-handed version is also available. `,
        finish: 'Vintage Cherry',
        color: 'https://images.ctfassets.net/m8onsx4mm13s/5O4gyJHCRpGdEkSpvhVzgv/dabf743b4da1989a727f411b4f997e69/__static.gibson.com_product-images_Epiphone_EPINKN592_Vintage_Cherry_Vintage_Cherry.jpg',
        handedness: 'Left',
        category: 'Les Paul',
        partner: 'Gibson'
    },
    {
        id: 33,
        name: 'ML1 BARITONE PRO MODERN',
        price: "2500",
        priceDesc: '1179.99',
        img: '/guitars/chapman-ml1-baritone.png',
        description: `The Baritone has always been a fundamental part of our line up and is now available in the all-new ML1 Pro Modern.

        Like the standard scale ML1 Pro Modern, we’ve approached this Baritone from the ground up. Our primary objective was to fully realise a more ergonomic and refined design. We achieved this in part through the assimilation of requests from the public, alongside tweaks and modifications from Chapmans own hard-working R&amp;D team.
        Featuring a fully upgraded body contour and carved top, the new Pro Baritone is more comfortable to play than ever, with increased upper fret access, a 28-inch scale length, and a stunning contemporary look. It features an all new, proprietary, carved/four bolt construction utilising carbon reinforced rods for ultimate stability. The neck has the feel and access of a set through, but with the practicality of a bolt on!
        Action packed full of spec like Stainless steel frets, USA Seymour Duncan Pegasus/Sentient Humbuckers and Hipshot tuners, this modern rock machine is the tool you need for the job.
        `,
        finish: 'Morpheus Flip Gloss',
        color: 'https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/06/07090045/wp-thumb-mop-150x150.jpg',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Chapman'
    },
    {
        id: 34,
        name: 'LAW MAKER LEGACY BARITONE',
        price: "2500",
        priceDesc: '1099.00',
        img: '/guitars/law-maker-legacy.png',
        description: `The Chapman Law Maker Legacy Baritone is built on the solid foundation of its predecessor, featuring a 28” Baritone scale length, unlocking the realm of low tunings and unleashing brutal tones.
        In captivating Ocean Moss Blue finish, the Lawmaker Legacy Baritone is absolutely brutal, yet remains articulate through subtle details in design, which echo its glory from the past - this guitar promises to redefine your musical journey`,
        finish: 'Jungle',
        color: 'https://i.gyazo.com/504c1f9e1aa6f4ef009ece3ae4e70a56.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Chapman'
    },
    {
        id: 35,
        name: 'LAW MAKER LEGACY',
        price: "2500",
        priceDesc: '1099.99',
        img: '/guitars/law-maker.png',
        description: `Introducing the Chapman Lawmaker Legacy – a guitar that stands as a testament to Chapmans’ uncompromising quality and craftsmanship.
        In striking Forest Moss Green, the Lawmaker Legacy boasts a transparent satin coating that reveals the natural beauty of its Alder body and Flame Maple top. But it’s the Rosewood neck and fingerboard that steal the show, adding richness and depth to your playing experience.`,
        finish: 'Exotic Green',
        color: 'https://i.gyazo.com/fdc31b9421481d87739cc9e1ca06957c.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Chapman'
    },
    {
        id: 36,
        name: 'ML1 X',
        price: "2500",
        priceDesc: '599.99',
        img: '/guitars/ml1x.png',
        description: `In 2020 Chapman guitars celebrated a decade of existence by launching the ML1 pro X Anniversary model.
        To continue this legacy we are extremely proud to bring the “X range” into our standard series with the all new ML1 X.
        Beautifully crafted from Maple, Macassar Ebony, Ash and Mahogany and with high end appointments like super rolled edges, a Chapman 2-point trem featuring a steel block, you’ll quickly see that the apple doesn’t fall far from the tree. Perfectly balancing flexibility, playability, and tone, the ML1 X comes equipped with its own Chapman Consentus HSS ALNICO 5 pick up set that truly allow the voice of the instrument to come through. Whether you choose deep red, deep blue or gloss black, your hands and ears will love you for the rest of your life`,
        finish: 'Transparant Deep Red',
        color: 'https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/09/28112237/x-drg.png',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Chapman'
    },
    {
        id: 37,
        name: 'ML1 MODERN (SPECIAL RUN)',
        price: "2500",
        priceDesc: '699.99',
        img: '/guitars/ml1-special-run.png',
        description: `This special edition of the ML1 Modern Standard, powered by a USA Seymour Duncan Pegasus in the bridge and a Sentient in the Neck. The Poplar Burl is accentuated by the high gloss Rainstorm finish above a Mahogany body, complemented by a Macassar Ebony fretboard over a maple neck. There’s a storm brewing….`,
        finish: 'Storm Burst',
        color: 'https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/07/27103102/stormburst.jpg',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Chapman'
    },
    {
        id: 38,
        name: 'ML1 MODERN BARITONE',
        price: "2500",
        priceDesc: '779.99',
        img: '/guitars/ml1-modern-baritone.png',
        description: `If aggressive, melodic and powerful extended range filth is your thing, then look no further than the ML1 Modern Baritone. Fully-loaded with 12-60 gauge strings, you can effortlessly tune to drop A and shake the pillars of heaven. Every note slams you in the chest like a war hammer courtesy of the Chapman Zerø Sonorous Alnico 5 humbuckers. But don't be fooled into thinking that the ML1 Modern Baritone is simply just a 'djent machine'. With its alder body, satin-finished maple neck and ebony fretboard a veritable cornucopia of tones are ready for you at the flick of it's three-way blade or the pull of it's coil split-able tone pot. Action-packed with features such as rolled edges and finished off with a natural reveal binding, the ML1 Modern Baritone is your to take away... just don't feed it after dark.`,
        finish: 'Storm Burst',
        color: 'https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/07/27103102/stormburst.jpg',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Chapman'
    },
    {
        id: 39,
        name: 'ML3 PRO MODERN',
        price: "2500",
        priceDesc: '1079.99',
        img: '/guitars/ml3-pro-modern.png',
        description: `The ML3 Pro Modern has always been know for its thick, powerful tone and lightning fast playability, but now we have juiced up this work-horse with new materials, tech and exciting spec. Equipped with a pair of hand built Seymour Duncan Humbuckers, an Alnico 5 loaded Sentient which delivers a very articulate vintage output pickup with great dynamic response and a Pegasus which gives a wide harmonic range and a delivers a warm, balanced, responsive, and lush tone for progressive metal, you’ll have a hard job putting it down. The powerful combination of baked maple and Basswood together with Stainless Steel frets all wrapped up in a stunning satin metallic finish will give you everything you need to dominate the stage.`,
        finish: 'Hot White',
        color: 'https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/07/27110320/hot-white.jpg',
        handedness: 'Right',
        category: 'Stratocaster',
        partner: 'Chapman'
    },
    {
        id: 40,
        name: 'ML3 LH PRO TRADITIONAL',
        price: "2500",
        priceDesc: '899.00',
        img: '/guitars/ml3-lh.png',
        description: `Glistening like a vintage limousine soaring through the rain, the ML3 Pro Traditional has all the grace and style of a vintage vehicle with the roaring engine to match and is now available in a Left Handed model. Equipped with a pair of Seymour Duncan “Hot Tele” Single coil pickups, featuring hand-ground Alnico five rod magnets, a special high output coil wind and wax potted for squeal free performance - this beast is firing on all cylinders. Resplendent with its silky smooth baked maple neck and fingerboard, Stainless Steel frets, lightweight Alder body and stunning Classic Black metallic finish, as soon as your hand touches the neck you will realise - elegance is when the inside is as beautiful as the outside.`,
        finish: 'Black',
        color: 'https://i.gyazo.com/6c9379e1a182b3facfbcbe4addfd3c31.png',
        handedness: 'Left',
        category: 'Stratocaster',
        partner: 'Chapman'
    },
    {
        id: 41,
        name: 'ML3 LH PRO MODERN',
        price: "2500",
        priceDesc: '939.00',
        img: '/guitars/ml3-pro-modern-lh.png',
        description: `The ML3 pro Modern has always been know for its thick, powerful tone and lightning fast playability, but now we have juiced up this work-horse with new materials, tech and exciting spec, now available in a Left Handed model. Equipped with a pair of hand built Seymour Duncan Humbuckers, an Alnico 5 loaded Sentient which delivers a very articulate vintage output pickup with great dynamic response and a Pegasus which gives a wide harmonic range and a delivers a warm, balanced, responsive, and lush tone for progressive metal, you’ll have a hard job putting it down. The powerful combination of baked maple and Basswood together with Stainless Steel frets all wrapped up in a stunning Hot Blue satin metallic finish will give you everything you need to dominate the stage.`,
        finish: 'Blue Sky',
        color: 'https://i.gyazo.com/3dedc32ca22027f8b759e7d9af9d3bac.png',
        handedness: 'Left',
        category: 'Stratocaster',
        partner: 'Chapman'
    },
]

export default guitarsProducts;