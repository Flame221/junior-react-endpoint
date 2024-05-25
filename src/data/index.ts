import Product from "./model/product";
import { Category } from "./type";

import { xboxDescription, airpodsDescription, airtagDescription } from './items/descriptions';
import AttributeSet, { AttributeType } from "./model/attribute-set";
import Attribute from "./model/attribute";

const shoeSizes = new AttributeSet('Size')
    .addItemList([
        new Attribute('40'),
        new Attribute('41'),
        new Attribute('42'),
        new Attribute('43')
    ]);


const clothesSizes = new AttributeSet('Size')
    .addItemList([
        new Attribute('Small', 'S'),
        new Attribute('Medium', 'M'),
        new Attribute('Large', 'L'),
        new Attribute('Extra Large', 'XL')
    ]);

const colors = new AttributeSet('Color')
    .setType(AttributeType.swatch)
    .addItemList([
        new Attribute('Green', '#44FF03'),
        new Attribute('Cyan', '#03FFF7'),
        new Attribute('Blue', '#030BFF'),
        new Attribute('Black', '#000000'),
        new Attribute('White', '#FFFFFF')
    ]);

const yesNo = [new Attribute('Yes'), new Attribute('No')];

const capacity = new AttributeSet('Capacity')
    .addItemList([
        new Attribute('512G'),
        new Attribute('1T')
    ]);

const products: Product[] = [
    new Product('Nike Air Huarache Le')
        .setId('huarache-x-stussy-le')
        .setPrice(120)
        .setDescription(`
        <h3>Step into Comfort and Style</h3>
<p>Our everyday sneakers are designed to offer unparalleled comfort, style, and durability. Just like your favorite footwear, these sneakers provide a perfect blend of fashion and function. Slip them on, and they’re ready to complement your day from the moment you lace up.</p>
<h3>Ultimate Comfort</h3>
<p>Incredibly lightweight and breathable, our sneakers ensure that your feet stay cool and comfortable all day long. The advanced cushioning system provides excellent support, reducing strain on your feet and making these sneakers perfect for long walks, workouts, or casual outings.</p>
<h3>Breathable Design</h3>
<p>Our sneakers feature a breathable mesh upper that allows air to circulate, keeping your feet fresh and dry. This design also helps in maintaining an optimal temperature inside the shoes, so your feet feel natural and comfortable, whether you're indoors or outdoors.</p>
<h3>Customizable Fit</h3>
<p>Available in multiple sizes with adjustable laces, our sneakers offer a customizable fit for every foot. The flexible material adapts to the shape of your foot, providing a secure and snug fit that enhances your comfort and performance.</p>
<h3>Exceptional Durability</h3>
<p>Made with high-quality materials, our sneakers are built to withstand daily wear and tear. The durable sole provides excellent traction and stability on various surfaces, ensuring a long-lasting and reliable performance.</p>
<h3>Smart Features</h3>
<p>Designed with the latest in footwear technology, our sneakers feature an ergonomic insole for added support and comfort. The sleek design and variety of color options make them a versatile choice for any outfit. Plus, they’re easy to clean and maintain, keeping them looking fresh for longer.</p>`)
        .addImages([
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087'
        ])
        .setCategory(Category.clothes)
        .setBrand('Nike x Stussy')
        .addAttributeSet(shoeSizes),

    new Product('Jacket')
        .setId('jacket-canada-goosee')
        .setPrice(430)
        .addImages([
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg',
        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Canada Goose')
        .setDescription(`
<h3>Warmth Like Never Before</h3>
<p>Our winter jacket is designed to provide ultimate warmth, weather resistance, and a customizable fit for all-day comfort. Just like your favorite outerwear, this jacket seamlessly integrates style and functionality. Slip it on, and it’s ready to keep you cozy right out of the closet.</p>

<h3>Superior Insulation</h3>
<p>Incredibly lightweight yet exceptionally warm, our winter jacket shields you from the cold so you can stay focused on your activities. Utilizing advanced insulation technology, this jacket continuously adapts to your body temperature, ensuring optimal warmth without the bulk.</p>

<h3>Weather-Resistant Protection</h3>
<p>Switch to full protection mode with our jacket's superior weather-resistant materials. Designed to keep wind, rain, and snow at bay, this jacket lets you stay dry and comfortable in any weather. The water-repellent outer shell ensures that moisture rolls right off, keeping you dry and cozy.</p>

<h3>All-new Design</h3>
<p>Our winter jacket offers a more customizable fit with adjustable cuffs, hem, and hood. The ergonomic design conforms to the shape of your body, providing a secure fit that enhances both comfort and mobility, perfect for any winter adventure.</p>

<h3>Exceptional Warmth</h3>
<p>A high-quality, eco-friendly down fill delivers superior insulation. The efficient heat-retaining fabric produces consistent warmth while maintaining breathability, ensuring you stay comfortable in varying temperatures. And the soft inner lining adds an extra layer of coziness for an unmatched wearing experience.</p>

<h3>Even More Functional</h3>
<p>Featuring a range of smart functionalities, our jacket includes multiple pockets for secure storage of your essentials. Adjustable features make it easy to customize your fit and comfort level. Reflective elements enhance visibility in low-light conditions, adding an extra layer of safety. Whether you’re hitting the slopes, going for a winter hike, or just heading out for a brisk walk, this jacket has got you covered.</p>`)
        .setCategory(Category.clothes),

    new Product('PlayStation 5')
        .setId('ps-5')
        .setPrice(700)
        .addImages([
            'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg'
        ])
        .addAttributeSet(colors)
        .addAttributeSet(capacity)
        .setBrand('Sony')
        .setInStock(false)
        .setDescription(`
        <h3>Gaming Like Never Before</h3>
        <p>Our gaming console is designed to deliver immersive gameplay, backward compatibility with PS4 games, and a customizable experience for all-day entertainment. Just like your favorite console, this one connects seamlessly to your TV or monitor. And it’s ready to play right out of the box.</p>
        
        <h3>Immersive Gaming Experience</h3>
        <p>Incredibly powerful and efficient, our gaming console lets you dive into your favorite games with stunning visuals and fast load times. With advanced graphics and processing capabilities, this console ensures smooth gameplay and vivid detail, making every game feel real and engaging.</p>
        
        <h3>Backward Compatibility</h3>
        <p>Switch effortlessly between the latest games and your beloved PS4 titles. Our console’s backward compatibility feature allows you to enjoy a vast library of PS4 games, ensuring that your favorite classics are always within reach. The enhanced performance gives new life to your old favorites.</p>
        
        <h3>All-new Design</h3>
        <p>Our gaming console features a sleek, modern design that fits perfectly in any entertainment setup. The customizable LED lighting and ergonomic controllers provide both style and comfort, ensuring a premium gaming experience. The compact and efficient design also ensures it runs quietly and stays cool, even during intense gaming sessions.</p>
        
        <h3>Amazing Audio and Visuals</h3>
        <p>Experience breathtaking graphics with a high-resolution output and a custom-built GPU. The console's high dynamic range (HDR) support enhances color and contrast, making every scene look vibrant and lifelike. And with 3D audio technology, you’ll be immersed in soundscapes that make you feel like you’re right in the game.</p>
        
        <h3>Even More Interactive</h3>
        <p>The advanced chipset delivers incredibly low latency for responsive gameplay. The intuitive control center makes it easy to manage your games, settings, and social features. With online multiplayer options, you and your friends can join forces or compete, sharing the same thrilling gaming experience from anywhere in the world. Plus, the console’s integrated streaming capabilities let you broadcast your gameplay and connect with the gaming community like never before.</p>`)
        .setCategory(Category.tech),

    new Product('Xbox Series S 512GB')
        .setId('xbox-series-s')
        .setPrice(277)
        .addImages([
            'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg'
        ])
        .setBrand('Microsoft')
        .setInStock(false)
        .addAttributeSet(colors)
        .addAttributeSet(capacity)
        .setDescription(xboxDescription)
        .setCategory(Category.tech),

    new Product('iMac 2021')
        .setId('apple-imac-2021')
        .setPrice(1400)
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000'
        ])
        .addAttributeSet(new AttributeSet('Capacity')
            .addItem(new Attribute('256GB'))
            .addItem(new Attribute('512GB'))
        )
        .setDescription(`
        <h3>Innovation Like You’ve Never Seen</h3>
<p>The iMac 2021 has been designed to deliver stunning performance, vibrant colors, and a sleek, all-in-one design for an unparalleled computing experience. Just like other Apple devices, the iMac 2021 connects seamlessly with your iPhone and iPad. And it’s ready to impress right out of the box.</p>
<h3>Powerful Performance</h3>
<p>Incredibly fast and efficient, the iMac 2021 is powered by the revolutionary Apple M1 chip, delivering up to 85% faster CPU performance and up to 2x faster graphics. Whether you’re editing photos, creating music, or streaming high-definition videos, the iMac 2021 ensures smooth and responsive performance to keep you focused on your tasks.</p>
<h3>Vibrant Retina Display</h3>
<p>The iMac 2021 features a stunning 24-inch 4.5K Retina display, bringing your content to life with over a billion colors and 500 nits of brightness. With True Tone technology, the display adjusts the color temperature to match the ambient light, making everything you view look natural and vibrant. From creative projects to watching movies, the Retina display offers an immersive visual experience.</p>
<h3>All-new Design</h3>
<p>The iMac 2021 offers a more customizable experience with its thin and sleek design available in seven vibrant colors. The all-in-one design includes a matching color-matched keyboard and mouse, creating a cohesive and stylish workspace. The slim profile and compact stand free up your desk space, making it perfect for any environment.</p>
<h3>Amazing Audio Quality</h3>
<p>The iMac 2021 is equipped with a six-speaker sound system that delivers high-fidelity audio, making it perfect for music, movies, and more. The force-canceling woofers produce deep, rich bass without distortion, while the high-performance tweeters deliver accurate mids and crisp highs. And with studio-quality microphones, your voice comes through loud and clear during video calls and recordings.</p>
<h3>Even More Connected</h3>
<p>The Apple-designed M1 chip brings advanced connectivity options to the iMac 2021, including Thunderbolt ports for high-speed data transfer and versatile peripheral connections. The 1080p FaceTime HD camera and advanced image signal processor ensure you look your best during video calls. And with the power of macOS, you can use features like Universal Clipboard, Handoff, and Sidecar to enhance your productivity and seamlessly connect your iMac with other Apple devices.</p>`)
        .addAttributeSet(new AttributeSet('With USB 3 ports').addItemList(yesNo))
        .addAttributeSet(new AttributeSet('Touch ID in keyboard').addItemList(yesNo))
        .setCategory(Category.tech),

    new Product('iPhone 12 Pro')
        .setId('apple-iphone-12-pro')
        .setPrice(830)
        .setBrand('Apple')
        .setDescription(`
        <h3>Experience Innovation Like Never Before</h3>
<p>The iPhone 12 has been designed to deliver advanced technology for an extraordinary user experience, with a stunning display, powerful performance, and a sleek design. Just like other Apple products, the iPhone 12 connects seamlessly with your AirPods and Apple Watch. And it’s ready to use right out of the box.</p>
<h3>Stunning Super Retina XDR Display</h3>
<p>The iPhone 12 features a Super Retina XDR display that offers vibrant colors, deep blacks, and incredible contrast. With a high resolution and HDR support, this display brings everything to life, whether you’re watching videos, playing games, or browsing photos. The Ceramic Shield front cover provides four times better drop performance, making the iPhone 12 incredibly durable.</p>
<h3>5G Speed</h3>
<p>Switch to 5G and experience blazing-fast speeds and low latency, allowing you to download movies on the fly, stream high-quality video, and enjoy real-time responsiveness in gaming. The iPhone 12 is designed to maximize 5G performance for faster and more reliable connections, keeping you connected like never before.</p>
<h3>All-new Design</h3>
<p>The iPhone 12 offers a sleek, flat-edge design with aerospace-grade aluminum edges and a durable glass back. Available in five stunning colors, it’s designed to be both beautiful and tough. The compact and lightweight build ensures it fits comfortably in your hand, providing a premium feel and look.</p>
<h3>Powerful A14 Bionic Chip</h3>
<p>Equipped with the A14 Bionic chip, the fastest chip in a smartphone, the iPhone 12 delivers incredible performance and efficiency. This chip enables advanced computational photography, console-quality gaming, and powerful machine learning capabilities, all while extending battery life. Experience smooth and responsive performance for every task.</p>
<h3>Even More Connected</h3>
<p>The iPhone 12 comes with iOS, offering a seamless and intuitive user experience. The new iOS 14 features widgets on the home screen, App Library, and more customization options. With MagSafe technology, charging and accessories snap on magnetically for an effortless experience. And with FaceTime HD camera and advanced image processing, your video calls and selfies will look better than ever. Plus, you can easily share content with friends using AirDrop, ensuring you stay connected in every way.</p>`)
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000'
        ])
        .addAttributeSet(capacity)
        .addAttributeSet(colors)
        .setCategory(Category.tech),

    new Product('AirPods Pro')
        .setId('apple-airpods-pro')
        .setPrice(249)
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000'
        ])
        .setInStock(false)
        .setDescription(airpodsDescription)
        .setCategory(Category.tech),

    new Product('AirTag')
        .setId('apple-airtag')
        .setPrice(100)
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000'
        ])
        .setDescription(airtagDescription)
        .setCategory(Category.tech)
];

export { products };
