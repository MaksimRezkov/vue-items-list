Инициализация и запуск:
npm i
npm run dev

Данные для основного списка получаем по общедоступному API https://jsonplaceholder.typicode.com/; элементы вложенного списка генерируются только по локальным данным на клиенте

Реализованный функционал:
- основной список в виде бесконечной ленты, используем пагинацию (данные догружаются, когда доскроллим почти до конца);
- если при первичной подгрузке скролл отсутствует, происходит вычисление новго кол-ва элементов в одной подгружаемой порции так чтобы создать скролл, после сразу подгружается ещё нужное кол-ва (в хуке useCheckRemainingWithoutScroll);
- каждый элемент в виде карточки, имеет вложенный список с карточками, вложенный список скроллится с помощью кроллбара, удержанием и передвижением мыши и Shift + MouseWheel;
- для частых событий используется троттлинг
