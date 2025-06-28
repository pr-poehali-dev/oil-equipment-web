import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProductShowcase = () => {
  const products = [
    {
      title: "Электродвигатели для нефтедобычи",
      description:
        "Высокоэффективные электродвигатели для погружных насосов с повышенной надежностью и долговечностью",
      features: [
        "Мощность до 200 кВт",
        "Рабочая температура до 150°C",
        "Защита IP68",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      icon: "Zap",
    },
    {
      title: "Автокомпоненты и тормозные диски",
      description:
        "Отливки автокомпонентов и диски переднего тормоза для легковых автомобилей и микроавтобусов",
      features: ["Стандарт ISO 9001", "Износостойкость", "Точное литье"],
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
      icon: "Car",
    },
    {
      title: "Установки УЭЦН",
      description:
        "Полнокомплектные установки электроцентробежных насосов для эффективной добычи нефти",
      features: [
        "Полная комплектация",
        "Автоматизация",
        "Удаленный мониторинг",
      ],
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
      icon: "Settings",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наша продукция
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Производим высокотехнологичное оборудование для нефтяной
            промышленности и автомобильной индустрии с гарантией качества
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={product.icon as any}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="w-4 h-4 text-green-500 mr-2"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Подробнее
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
