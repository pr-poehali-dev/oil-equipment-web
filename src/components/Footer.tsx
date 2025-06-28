import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">НефтеТех</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Производство высокотехнологичного оборудования для нефтяной
              промышленности и автомобильной индустрии с 2008 года.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Icon name="Facebook" className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Icon name="Linkedin" className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Icon name="Youtube" className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Быстрые ссылки</h3>
            <div className="space-y-2">
              {[
                { title: "О компании", href: "/about" },
                { title: "Продукция", href: "/products" },
                { title: "Услуги", href: "/services" },
                { title: "Проекты", href: "/projects" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Продукция</h3>
            <div className="space-y-2">
              {[
                "Электродвигатели",
                "Автокомпоненты",
                "Тормозные диски",
                "Установки УЭЦН",
              ].map((product) => (
                <div key={product} className="text-gray-400 text-sm">
                  {product}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400 text-sm">
                  г. Москва, ул. Промышленная, д. 15
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400 text-sm">
                  +7 (495) 123-45-67
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400 text-sm">info@neftetech.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400 text-sm">
                  Пн-Пт: 9:00 - 18:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 НефтеТех. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
