import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Свяжитесь с нами для получения персонального предложения и
            консультации по выбору оптимального оборудования для вашего
            производства
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            >
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Позвонить нам
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              <Icon name="Mail" className="w-5 h-5 mr-2" />
              Написать письмо
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Clock" className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">Быстрый ответ</div>
              <div className="text-sm opacity-80">в течение 1 часа</div>
            </div>
            <div>
              <Icon name="Users" className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">Личный менеджер</div>
              <div className="text-sm opacity-80">для каждого клиента</div>
            </div>
            <div>
              <Icon name="Truck" className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">Доставка</div>
              <div className="text-sm opacity-80">по всей России</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
