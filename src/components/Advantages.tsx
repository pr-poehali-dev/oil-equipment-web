import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      title: "Высокое качество",
      description:
        "Соответствие международным стандартам ISO 9001 и строгий контроль качества на всех этапах производства",
      icon: "Award",
    },
    {
      title: "Инновации",
      description:
        "Собственное конструкторское бюро и постоянная работа над улучшением технических характеристик",
      icon: "Lightbulb",
    },
    {
      title: "Надежность",
      description:
        "15+ лет успешной работы на рынке и тысячи довольных клиентов по всей России и СНГ",
      icon: "Shield",
    },
    {
      title: "Сервис",
      description:
        "Полный цикл обслуживания от проектирования до послепродажного сервиса и технической поддержки",
      icon: "Wrench",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем комплексные решения для нефтяной и автомобильной
            промышленности с гарантией качества и надежности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={advantage.icon as any}
                  className="w-10 h-10 text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
