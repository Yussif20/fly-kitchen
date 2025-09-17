export default function Features() {
  return (
    <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      <div className="bg-white dark:bg-[#23263a] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-[#f2c928]/30">
        <h3 className="text-xl font-bold text-[#f2c928] mb-2">
          توصيل سريع جداً
        </h3>
        <p className="text-[#202332] dark:text-[#f2c928] text-base">
          توصيلنا فوري لطلبات موقعك الإلكتروني، وفي 180 دقيقة كحد أقصى!
        </p>
      </div>
      <div className="bg-white dark:bg-[#23263a] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-[#f2c928]/30">
        <h3 className="text-xl font-bold text-[#f2c928] mb-2">طرق التخزين</h3>
        <p className="text-[#202332] dark:text-[#f2c928] text-base">
          نخزن منتجاتك مهما كانت، جافة، مبردة، أو حتى مجمدة.
        </p>
      </div>
      <div className="bg-white dark:bg-[#23263a] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-[#f2c928]/30">
        <h3 className="text-xl font-bold text-[#f2c928] mb-2">
          تغطية جغرافية كبيرة
        </h3>
        <p className="text-[#202332] dark:text-[#f2c928] text-base">
          فروع منتشرة على مستوى المملكة تخليك أقرب لعملائك.
        </p>
      </div>
      <div className="bg-white dark:bg-[#23263a] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-[#f2c928]/30">
        <h3 className="text-xl font-bold text-[#f2c928] mb-2">قنوات البيع</h3>
        <p className="text-[#202332] dark:text-[#f2c928] text-base">
          الظهور في تطبيقات التوصيل كالمحل الأقرب للعملاء.
        </p>
      </div>
    </section>
  );
}
