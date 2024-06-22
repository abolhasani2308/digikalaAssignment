import {FlashList} from '@shopify/flash-list';
import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import BaseScreen from '../../components/base-screen/BaseScreen.component';
import ListEmpty from '../../components/list-empty/ListEmpty.component';
import ListError from '../../components/list-error/ListError.component';
import ListLoading from '../../components/list-loading/ListLoading.component';
import ProductItem from '../../components/product-item/ProductItem.component';
import SearchInput from '../../components/search-input/SearchInput.component';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks';
import {
  setIsLoading,
  setIsRefreshing,
} from '../../redux/features/fetching/FetchingModesSlice';
import {setProducts} from '../../redux/features/products/ProductsSlice';
import useProductsFetcher from '../../utils/ProductsFetcher';
import styles from './Products.styles';

const data = [
  {
    id: '1',
    name: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: 46700000,
    discountedPrice: 45299000,
    discountPercentage: 3,
    description:
      'گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است.',
  },
  {
    id: '2',
    name: 'گوشی موبایل اپل مدل iPhone 13 Pro Max ZDA تک سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت - نات اکتیو ریفربیش پارت نامبر F',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/dcd6e4e843bea3f070614a95d27b1181fdf23008_1710583650.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: 89250000,
    discountedPrice: 84787500,
    discountPercentage: 5,
    description:
      'بدون هیچ تعریف اضافی باید بگوییم که iPhone 13 Pro Max یکی از قدرتمند‌ترین گوشی‌های هوشمند پرچمدار موجود در بازار است که توانست رکوردهای جدیدی را به نام خودش ثبت کند. این گوشی به صفحه‌نمایش 6.7 اینچ و رزولوشن 2778x1284 با توانایی نمایش 458 پیکسل در هر اینچ، نرخ بروزرسانی 120 هرتز، حداکثر روشنایی 1200 نیت (nits)، تمام هرآنچه از یک صفحه‌نمایش باکیفیت توقع دارید را در اختیارتان می‌گذارد.',
  },
  {
    id: '3',
    name: 'گوشی موبایل اپل مدل iPhone 13 Pro CH دو سیم‌ کارت ظرفیت 512 گیگابایت و 6 گیگابایت رم - نات اکتیو',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1673784561.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: 144400000,
    discountedPrice: 141512000,
    discountPercentage: 2,
    description:
      'اپل همواره توانسته است گوشی‌های هوشمند قدرتمند و بسیار باکیفیتی را روانه بازار کند و پرچمداران سری 13 هم توانستند با بهره بردن از مشخصات فنی قدرتمند، نه‌تنها به نسبت نسل قبلی یعنی خانواده iPhone12، بلکه به نسبت پرچمداران مدعی دیگر هم عملکرد بسیار درخشانی داشته باشند. iPhone 13 Pro از لحاظ مشخصات فنی در نظر گرفته شده چیزی کم از گل سرسبد این سری یعنی iPhone 13 Pro Max ندارد.',
  },
  {
    id: '4',
    name: 'گوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - نات اکتیو',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1710754535.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: 29399000,
    discountedPrice: 27047080,
    discountPercentage: 8,
    description:
      'در بین پرچمداران قدرتمند سری 11 شرکت اپل، شاهد رونمایی آیفون 11 بودیم که به نسبت نسخه پرو و پرو مکس، از مشخصات فنی کمی ضعیف‌تر بهره برده بود. این گوشی بسیار مناسب برای کاربران اپل پسند است که می‌خواهند پرچمداری با قیمت مقرون به‌صرفه‌تر به نسبت مدل‌های پرو و پرو مکس داشته باشند. این گوشی به صفحه‌نمایش 6.1 اینچ با رزولوشن 828×1792 پیکسل از نوع Liquid Retina IPS LCD مجهز شده است.',
  },
  {
    id: '5',
    name: 'گوشی موبایل سامسونگ مدل Galaxy S24 Ultra دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - ویتنام',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/a8234e915f4f6ed119daac830e39eca031d62c2d_1705751969.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: 62396000,
    discountedPrice: 60524120,
    discountPercentage: 3,
    description:
      'همواره گوشی‌های هوشمند پرچمدار سامسونگ توانسته‌اند با بهره بردن از مشخصات فنی قدرتمند، توجه هر بیننده‌ای را به خود جلب کنند و همواره رقیبان سرسختی برای برند‌های دیگر فعال در این عرصه بودند و این بار نوبت به قدرت‌نمایی سامسونگ Galaxy S24 Ultra رسیده است.',
  },
  {
    id: '6',
    name: 'گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/bd7648d55ffe49a0596ac3668f4db41f7c790f6a_1696760508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: 25689000,
    discountedPrice: 25689000,
    discountPercentage: 0,
    description:
      'سامسونگ چند سالی است که در کنار رونمایی از پرچمداران قدرتمند خود، گوشی مقرون به‌صرفه با مشخصات نزدیک به پرچمداران را معرفی می‌کند که گوشی موبایل سامسونگ مدل Galaxy S23 FE یکی از آن‌ها است. ظاهر این گوشی ما را به یاد Galaxy S23 و Galaxy S23 Plus می‌اندازد و از نظر مشخصات فنی در نظر گرفته شده در برخی از بخش‌ها، چیزی کم از آن‌ها ندارد.',
  },
  {
    id: '7',
    name: 'گوشی موبایل سامسونگ مدل Galaxy S21 FE 5G دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/4af1bad23ab1945fa5cef6a333792196e0fe850e_1656426417.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: 21299000,
    discountedPrice: 20660030,
    discountPercentage: 3,
    description:
      'سری FE گوشی‌های هوشمند سامسونگ با توجه به بهره بردن از مشخصات فنی مناسب و قدرتمند و البته قیمتی مقرون به‌صرفه‌تر به نسبت پرچمداران این شرکت، طرفداران بسیاری زیادی دارند و توانسته‌اند عملکرد بسیار خوب و قابل قبولی را به‌نمایش بگذارند.',
  },
  {
    id: '8',
    name: 'گوشی موبایل سامسونگ مدل Galaxy Z Flip5 تک سیم کارت ظرفیت 512 گیگابایت و رم 8 گیگابایت - ویتنام',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/98f5967d3b11b4069c7a89d9608fac880f4a24dc_1690809479.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    price: 57900000,
    discountedPrice: 55584000,
    discountPercentage: 4,
    description:
      'سامسونگ یکی از پیشگامان عرصه گوشی‌های هوشمند تاشو بود و توانست محصولات متنوع و با‌کیفیتی را روانه بازار کند. یکی از محصولات بسیار جذاب و خاص این برند هم، گوشی Galaxy Z Flip5 است.',
  },
];

const windowWidth = Dimensions.get('window').width;

export default function Products(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.value);
  const query = useAppSelector(state => state.query.value);
  const isLoading = useAppSelector(state => state.fetchingModes.isLoading);
  const isError = useAppSelector(state => state.fetchingModes.isError);
  const isRefreshing = useAppSelector(
    state => state.fetchingModes.isRefreshing,
  );
  const fetchProducts = useProductsFetcher();

  // useEffect(fetchProducts, []);

  useEffect(() => {
    dispatch(setProducts(data));
    dispatch(setIsLoading(false));
  }, []);

  function renderItem({item, index}) {
    return (
      <ProductItem
        data={item}
        animationId={`${item?.id}-${index}`}
        isEvenIndex={index % 2 === 0}
        isEndRow={
          products?.length % 2 === 0
            ? index === products?.length - 1 || index === products?.length - 2
            : index === products?.length - 1
        }
      />
    );
  }

  function refreshHandler() {
    dispatch(setIsRefreshing(true));
    fetchProducts();
  }

  function renderDetector() {
    switch (isLoading) {
      case true:
        return <ListLoading />;

      default:
        return (
          <View style={styles.listWrapper}>
            <FlashList
              data={
                !!query
                  ? products?.filter(item => item?.name?.includes(query))
                  : products
              }
              renderItem={renderItem}
              keyExtractor={item => item?.id}
              estimatedItemSize={windowWidth / 2 - 32 + 168}
              numColumns={2}
              ListEmptyComponent={isError ? <ListError /> : <ListEmpty />}
              ListHeaderComponent={<SearchInput />}
              onRefresh={refreshHandler}
              refreshing={isRefreshing}
              showsVerticalScrollIndicator={false}
            />
          </View>
        );
    }
  }

  return <BaseScreen>{renderDetector()}</BaseScreen>;
}
