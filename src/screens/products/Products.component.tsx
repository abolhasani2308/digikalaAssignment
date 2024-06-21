import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {Dimensions, View} from 'react-native';
import BaseScreen from '../../components/base-screen/BaseScreen.component';
import ProductItem from '../../components/product-item/ProductItem.component';
import SearchInput from '../../components/search-input/SearchInput.component';
import styles from './Products.styles';

const data = [
  {
    id: '1',
    name: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: '46699000',
    description: `گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. اپل در این سری از گوشی‌های iPhone خود پردازنده گرافیکی‌ای را قرار داده که از سری 12 گوشی‌های خود 30 درصد سریع‌تر است و این نویدبخش آن است که شما می‌توانید بازی‌هایی را با گرافیک و MAP سنگین تر و بزرگ‌تر اجرا کنید. یکی از ویژگی‌هایی که در iPhone 13 شاهد هستیم سیستم فیلمبرداری ProRes سینمایی آن است که می تواند انقلابی در فیلمبرداری گوشی‌های موبایل به‌راه انداخته باشد. گوشی‌های نات اکتیو با قرار گرفتن سیم‌کارت‌های داخلی اکتیو می‌شوند و برخلاف مدل اکتیو پلمپ کالا باز نشده است. گوشی‌های اکتیو برند اپل هم به این شکل هستند که به دلیل محدودیت‌های برخی از محصولات اپل برای کشور ایران، در کشور‌های همسایه به‌صورت رسمی با یک بار قرار گرفتن سیم‌کارت، اکتیو شده و پلمپ می‌شوند و باید بدانید که این پروسه هیچ مشکلی در راستای گارانتی کالا به‌همراه ندارد. پارت‌نامبر‌های اروپا و ژاپن و امارات تک سیم‌کارت هستند و پارت‌نامبر‌های مربوط به امارات هم از فیس تایم پشتیبانی نمی‌کنند. پارت‌نامبر JA (ژاپن) هم حتی در حالت سایلنت صدای شاتر عکس قطع نمی‌شود.`,
  },
  {
    id: '2',
    name: 'موبایل شماره دو',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: '46699000',
    description: `گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. اپل در این سری از گوشی‌های iPhone خود پردازنده گرافیکی‌ای را قرار داده که از سری 12 گوشی‌های خود 30 درصد سریع‌تر است و این نویدبخش آن است که شما می‌توانید بازی‌هایی را با گرافیک و MAP سنگین تر و بزرگ‌تر اجرا کنید. یکی از ویژگی‌هایی که در iPhone 13 شاهد هستیم سیستم فیلمبرداری ProRes سینمایی آن است که می تواند انقلابی در فیلمبرداری گوشی‌های موبایل به‌راه انداخته باشد. گوشی‌های نات اکتیو با قرار گرفتن سیم‌کارت‌های داخلی اکتیو می‌شوند و برخلاف مدل اکتیو پلمپ کالا باز نشده است. گوشی‌های اکتیو برند اپل هم به این شکل هستند که به دلیل محدودیت‌های برخی از محصولات اپل برای کشور ایران، در کشور‌های همسایه به‌صورت رسمی با یک بار قرار گرفتن سیم‌کارت، اکتیو شده و پلمپ می‌شوند و باید بدانید که این پروسه هیچ مشکلی در راستای گارانتی کالا به‌همراه ندارد. پارت‌نامبر‌های اروپا و ژاپن و امارات تک سیم‌کارت هستند و پارت‌نامبر‌های مربوط به امارات هم از فیس تایم پشتیبانی نمی‌کنند. پارت‌نامبر JA (ژاپن) هم حتی در حالت سایلنت صدای شاتر عکس قطع نمی‌شود.`,
  },
  {
    id: '3',
    name: 'موبایل شماره سه',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: '46699000',
    description: `گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. اپل در این سری از گوشی‌های iPhone خود پردازنده گرافیکی‌ای را قرار داده که از سری 12 گوشی‌های خود 30 درصد سریع‌تر است و این نویدبخش آن است که شما می‌توانید بازی‌هایی را با گرافیک و MAP سنگین تر و بزرگ‌تر اجرا کنید. یکی از ویژگی‌هایی که در iPhone 13 شاهد هستیم سیستم فیلمبرداری ProRes سینمایی آن است که می تواند انقلابی در فیلمبرداری گوشی‌های موبایل به‌راه انداخته باشد. گوشی‌های نات اکتیو با قرار گرفتن سیم‌کارت‌های داخلی اکتیو می‌شوند و برخلاف مدل اکتیو پلمپ کالا باز نشده است. گوشی‌های اکتیو برند اپل هم به این شکل هستند که به دلیل محدودیت‌های برخی از محصولات اپل برای کشور ایران، در کشور‌های همسایه به‌صورت رسمی با یک بار قرار گرفتن سیم‌کارت، اکتیو شده و پلمپ می‌شوند و باید بدانید که این پروسه هیچ مشکلی در راستای گارانتی کالا به‌همراه ندارد. پارت‌نامبر‌های اروپا و ژاپن و امارات تک سیم‌کارت هستند و پارت‌نامبر‌های مربوط به امارات هم از فیس تایم پشتیبانی نمی‌کنند. پارت‌نامبر JA (ژاپن) هم حتی در حالت سایلنت صدای شاتر عکس قطع نمی‌شود.`,
  },
  {
    id: '4',
    name: 'موبایل شماره سه',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: '46699000',
    description: `گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. اپل در این سری از گوشی‌های iPhone خود پردازنده گرافیکی‌ای را قرار داده که از سری 12 گوشی‌های خود 30 درصد سریع‌تر است و این نویدبخش آن است که شما می‌توانید بازی‌هایی را با گرافیک و MAP سنگین تر و بزرگ‌تر اجرا کنید. یکی از ویژگی‌هایی که در iPhone 13 شاهد هستیم سیستم فیلمبرداری ProRes سینمایی آن است که می تواند انقلابی در فیلمبرداری گوشی‌های موبایل به‌راه انداخته باشد. گوشی‌های نات اکتیو با قرار گرفتن سیم‌کارت‌های داخلی اکتیو می‌شوند و برخلاف مدل اکتیو پلمپ کالا باز نشده است. گوشی‌های اکتیو برند اپل هم به این شکل هستند که به دلیل محدودیت‌های برخی از محصولات اپل برای کشور ایران، در کشور‌های همسایه به‌صورت رسمی با یک بار قرار گرفتن سیم‌کارت، اکتیو شده و پلمپ می‌شوند و باید بدانید که این پروسه هیچ مشکلی در راستای گارانتی کالا به‌همراه ندارد. پارت‌نامبر‌های اروپا و ژاپن و امارات تک سیم‌کارت هستند و پارت‌نامبر‌های مربوط به امارات هم از فیس تایم پشتیبانی نمی‌کنند. پارت‌نامبر JA (ژاپن) هم حتی در حالت سایلنت صدای شاتر عکس قطع نمی‌شود.`,
  },
  {
    id: '5',
    name: 'موبایل شماره سه',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: '46699000',
    description: `گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. اپل در این سری از گوشی‌های iPhone خود پردازنده گرافیکی‌ای را قرار داده که از سری 12 گوشی‌های خود 30 درصد سریع‌تر است و این نویدبخش آن است که شما می‌توانید بازی‌هایی را با گرافیک و MAP سنگین تر و بزرگ‌تر اجرا کنید. یکی از ویژگی‌هایی که در iPhone 13 شاهد هستیم سیستم فیلمبرداری ProRes سینمایی آن است که می تواند انقلابی در فیلمبرداری گوشی‌های موبایل به‌راه انداخته باشد. گوشی‌های نات اکتیو با قرار گرفتن سیم‌کارت‌های داخلی اکتیو می‌شوند و برخلاف مدل اکتیو پلمپ کالا باز نشده است. گوشی‌های اکتیو برند اپل هم به این شکل هستند که به دلیل محدودیت‌های برخی از محصولات اپل برای کشور ایران، در کشور‌های همسایه به‌صورت رسمی با یک بار قرار گرفتن سیم‌کارت، اکتیو شده و پلمپ می‌شوند و باید بدانید که این پروسه هیچ مشکلی در راستای گارانتی کالا به‌همراه ندارد. پارت‌نامبر‌های اروپا و ژاپن و امارات تک سیم‌کارت هستند و پارت‌نامبر‌های مربوط به امارات هم از فیس تایم پشتیبانی نمی‌کنند. پارت‌نامبر JA (ژاپن) هم حتی در حالت سایلنت صدای شاتر عکس قطع نمی‌شود.`,
  },
  {
    id: '6',
    name: 'موبایل شماره سه',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: '46699000',
    description: `گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. اپل در این سری از گوشی‌های iPhone خود پردازنده گرافیکی‌ای را قرار داده که از سری 12 گوشی‌های خود 30 درصد سریع‌تر است و این نویدبخش آن است که شما می‌توانید بازی‌هایی را با گرافیک و MAP سنگین تر و بزرگ‌تر اجرا کنید. یکی از ویژگی‌هایی که در iPhone 13 شاهد هستیم سیستم فیلمبرداری ProRes سینمایی آن است که می تواند انقلابی در فیلمبرداری گوشی‌های موبایل به‌راه انداخته باشد. گوشی‌های نات اکتیو با قرار گرفتن سیم‌کارت‌های داخلی اکتیو می‌شوند و برخلاف مدل اکتیو پلمپ کالا باز نشده است. گوشی‌های اکتیو برند اپل هم به این شکل هستند که به دلیل محدودیت‌های برخی از محصولات اپل برای کشور ایران، در کشور‌های همسایه به‌صورت رسمی با یک بار قرار گرفتن سیم‌کارت، اکتیو شده و پلمپ می‌شوند و باید بدانید که این پروسه هیچ مشکلی در راستای گارانتی کالا به‌همراه ندارد. پارت‌نامبر‌های اروپا و ژاپن و امارات تک سیم‌کارت هستند و پارت‌نامبر‌های مربوط به امارات هم از فیس تایم پشتیبانی نمی‌کنند. پارت‌نامبر JA (ژاپن) هم حتی در حالت سایلنت صدای شاتر عکس قطع نمی‌شود.`,
  },
];

const windowWidth = Dimensions.get('window').width;

export default function Products(): React.JSX.Element {
  function renderItem({item, index}) {
    return (
      <ProductItem
        id={item?.id}
        name={item?.name}
        price={item?.price}
        image={item?.image}
        description={item?.description}
        isEvenIndex={index % 2 === 0}
        isEndRow={
          data?.length % 2 === 0
            ? index === data?.length - 1 || index === data?.length - 2
            : index === data?.length - 1
        }
      />
    );
  }

  return (
    <BaseScreen>
      <SearchInput />
      <View style={styles.listWrapper}>
        <FlashList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          estimatedItemSize={windowWidth / 2 - 32 + 168}
          numColumns={2}
        />
      </View>
    </BaseScreen>
  );
}
