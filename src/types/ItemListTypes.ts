import { Ref } from "vue";
import { ItemInt } from "./Comment";
import { AxiosError } from "axios";

export interface UseCheckScrollArgsInt {
  totalCount: ItemListStoreSchemaInt['totalCount'],
  itemList: ItemListStoreSchemaInt['itemList'],
  page: ItemListStoreSchemaInt['page'],
  isLoading: ItemListStoreSchemaInt['isLoading'],
}

export interface UseCheckRemainingWithoutScrollArgs {
  totalCount: ItemListStoreSchemaInt['totalCount'],
  itemList: ItemListStoreSchemaInt['itemList'],
  page: ItemListStoreSchemaInt['page'],
  listWrapper: Ref<HTMLElement | null>,
  limit: ItemListStoreSchemaInt['limit'],
}

/** Стор списка элементов */
export interface ItemListStoreSchemaInt {
  /** Список элементов на клиенте */
  itemList: Ref<ItemInt[]>,
  /** Добавление одного элемента в конец списка */
  addItem: (item: ItemInt) => void,
  /** Добавление нескольких элементов в конец списка */
  addItems: (item: ItemInt[]) => void,
  /** Очистка списка */
  clearItemList: () => void,

  /** Текущая страница элементов */
  page: Ref<number>,
  /** Изменить страницу */
  setPage: (value: number) => void,

  /** Кол-во подгружаемых элементов */
  limit: Ref<number>,
  /** Изменить кол-во подгружаемых элементов */
  setLimit: (value: number) => void,

  /** Флаг состояния загрузки */
  isLoading: Ref<boolean>,
  /** Включить индикацию загрузки */
  startLoading: () => void,
  /** Выключить индикацию загрузки */
  stopLoading: () => void,

  /** Данные об ошибке загрузки */
  errFetchItems: Ref<AxiosError | null>,
  /** Обновить данные об ошибке загрузки */
  setErrFetchItems: (value: AxiosError<unknown, any> | null) => void,

  /** Значение общего кол-ва элементов */
  totalCount: Ref<string | null>,
  /** Обновить данные об общем кол-ве элементов */
  setTotalCount: (value: string | null) => void,
}
