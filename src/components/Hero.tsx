import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-orange-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-lg text-orange-400 font-semibold mb-4">
                Ремера-Алнас
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Технологии для
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">
                  {" "}
                  нефтяной{" "}
                </span>
                промышленности
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Производим высокотехнологичное оборудование: электродвигатели
                для добычи нефти, автокомпоненты и полнокомплектные УЭЦН для
                максимальной эффективности производства.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Icon name="ArrowRight" className="w-5 h-5 mr-2" />
                Наша продукция
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3"
              >
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Смотреть видео
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">120+</div>
                <div className="text-sm text-gray-400">Видов насосов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">300</div>
                <div className="text-sm text-gray-400">
                  Модификаций двигателей
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">6000+</div>
                <div className="text-sm text-gray-400">
                  Вариантов оборудования
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-tr from-blue-600/20 to-orange-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Промышленное оборудование"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg">
                <Icon name="Cog" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
