/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

import { IRequestOptions, IRequestConfig, getConfigs, axios } from 'shared/api';
export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class AccountingService {
  /**
   *
   */
  static closeAccount(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/{id}/close';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получить лицевой счёт по его идентификатору
   */
  static getById(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AccountModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск лицевых счётов
   */
  static searchAccounts(
    params: {
      /**  */
      accountStatuses?: AccountStatus[];
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_AccountInfoModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      
      configs.params = {
        AccountStatuses: params['accountStatuses'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск транзакций лицевого счёта
   */
  static searchTransactions(
    params: {
      /** Идентификатор лицевого счёта */
      accountId?: number;
      /** Идентификаторы карманов аккаунта плательщика */
      subAccountIds?: any | null[];
      /** Транзакции, которые входят в один из счетов на оплату, идентификаторы которых указаны тут */
      invoiceIds?: any | null[];
      /** Статусы транзакций */
      statuses?: TransactionStatus[];
      /** Оплачена ли транзакция */
      isPaid?: boolean;
      /** Доходная ли транзакция */
      isRevenue?: boolean;
      /** Авансовая ли транзакция */
      isAdvance?: boolean;
      /** Тип коррекции
null или All - включаются все транзакции */
      correctionType?: CorrectionType;
      /** Дата создания с */
      dateCreatedFrom?: string;
      /** Дата создания по */
      dateCreatedTo?: string;
      /** Дата начисления с */
      datePostedFrom?: string;
      /** Дата начисления по */
      datePostedTo?: string;
      /** Дата планируемого начисления с */
      dateScheduledFrom?: string;
      /** Дата планируемого начисления по */
      dateScheduledTo?: string;
      /** Код системы источника начисления */
      sourceSystemCode?: string;
      /** Код сущности источника транзакций */
      ownerEntityId?: string;
      /** Код сущности источника начисления транзакции */
      postingEntityId?: string;
      /** Поиск группы транзакции по ее представителю */
      sampleGroupTransactionId?: number;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_TransactionModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/transactions';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        AccountId: params['accountId'],
        SubAccountIds: params['subAccountIds'],
        InvoiceIds: params['invoiceIds'],
        Statuses: params['statuses'],
        IsPaid: params['isPaid'],
        IsRevenue: params['isRevenue'],
        IsAdvance: params['isAdvance'],
        CorrectionType: params['correctionType'],
        DateCreatedFrom: params['dateCreatedFrom'],
        DateCreatedTo: params['dateCreatedTo'],
        DatePostedFrom: params['datePostedFrom'],
        DatePostedTo: params['datePostedTo'],
        DateScheduledFrom: params['dateScheduledFrom'],
        DateScheduledTo: params['dateScheduledTo'],
        SourceSystemCode: params['sourceSystemCode'],
        OwnerEntityId: params['ownerEntityId'],
        PostingEntityId: params['postingEntityId'],
        SampleGroupTransactionId: params['sampleGroupTransactionId'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получить счёт на оплату по его идентификатору
   */
  static getInvoiceById(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvoiceDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/invoices/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск счетов на оплату
   */
  static searchInvoices(
    params: {
      /** Идентификатор лицевого счёта */
      accountId?: number;
      /** Идентификаторы карманов аккаунта плательщика
Искать среди счетов на оплату с наличием транзакций заданных карманов */
      subAccountIds?: any | null[];
      /** Дата создания с */
      dateCreatedFrom?: string;
      /** Дата создания по */
      dateCreatedTo?: string;
      /** Статус документа */
      statuses?: InvoiceStatus[];
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_InvoiceModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/invoices';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        AccountId: params['accountId'],
        SubAccountIds: params['subAccountIds'],
        DateCreatedFrom: params['dateCreatedFrom'],
        DateCreatedTo: params['dateCreatedTo'],
        Statuses: params['statuses'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * <inheritdoc cref="M:Quirco.Accounting.Abstractions.IAccountService.CreateInvoiceByGroupedTransactions(Quirco.Accounting.Abstractions.Models.Invoices.CreateInvoiceByGroupedTransactions.Command,System.Threading.CancellationToken)" />
   */
  static createInvoiceByTransactionGroups(
    params: {
      /** requestBody */
      body?: CreateInvoiceByGroupedTransactions_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvoiceModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/invoices';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * <inheritdoc cref="M:Quirco.Accounting.Abstractions.IAccountService.GetTransactionsGroupsForNewInvoice(Quirco.Accounting.Abstractions.Models.Accounts.SearchTransactionGroups.Query,System.Threading.CancellationToken)" />
   */
  static searchNewInvoiceTransactions(
    params: {
      /** Идентификатор счета плательщика */
      accountId?: number;
      /** Включать ли коррекции, не связанных со счетами */
      excludeCorrectionsForNonInvoiceTransactions?: boolean;
      /** Включать ли коррекции для транзакций из инвойса */
      excludeCorrectionsForInvoiceTransactions?: boolean;
      /** Только транзакции, не включенные в инвойсы */
      withoutInvoiceTransactions?: boolean;
      /** Только доходные транзакции */
      onlyRevenue?: boolean;
      /** Идентификатор счета */
      invoiceId?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupTransactionModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/new-invoice-transactions';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        AccountId: params['accountId'],
        ExcludeCorrectionsForNonInvoiceTransactions: params['excludeCorrectionsForNonInvoiceTransactions'],
        ExcludeCorrectionsForInvoiceTransactions: params['excludeCorrectionsForInvoiceTransactions'],
        WithoutInvoiceTransactions: params['withoutInvoiceTransactions'],
        OnlyRevenue: params['onlyRevenue'],
        InvoiceId: params['invoiceId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * <inheritdoc cref="M:Quirco.Accounting.Abstractions.IAccountService.GetTransactionsGroupsForInvoiceCancel(Quirco.Accounting.Abstractions.Models.Accounts.SearchTransactionGroups.Query,System.Threading.CancellationToken)" />
   */
  static searchTransactionsGroupsForInvoiceCancel(
    params: {
      /** Идентификатор счета плательщика */
      accountId?: number;
      /** Включать ли коррекции, не связанных со счетами */
      excludeCorrectionsForNonInvoiceTransactions?: boolean;
      /** Включать ли коррекции для транзакций из инвойса */
      excludeCorrectionsForInvoiceTransactions?: boolean;
      /** Только транзакции, не включенные в инвойсы */
      withoutInvoiceTransactions?: boolean;
      /** Только доходные транзакции */
      onlyRevenue?: boolean;
      /** Идентификатор счета */
      invoiceId?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupTransactionModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/cancel-invoice-transactions';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        AccountId: params['accountId'],
        ExcludeCorrectionsForNonInvoiceTransactions: params['excludeCorrectionsForNonInvoiceTransactions'],
        ExcludeCorrectionsForInvoiceTransactions: params['excludeCorrectionsForInvoiceTransactions'],
        WithoutInvoiceTransactions: params['withoutInvoiceTransactions'],
        OnlyRevenue: params['onlyRevenue'],
        InvoiceId: params['invoiceId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * <inheritdoc cref="M:Quirco.Accounting.Abstractions.IAccountService.CancelInvoiceByGroupedTransactions(Quirco.Accounting.Abstractions.Models.Invoices.CancelInvoiceByGroupedTransactions.Command,System.Threading.CancellationToken)" />
   */
  static cancelInvoiceByGroupedTransactions(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: CancelInvoiceByGroupedTransactions_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/invoices/{id}/cancel';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получить информацию о плательщике по идентификатору его счёта
   */
  static getPayerInfoByAccountId(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PayerInfo> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/{id}/get-info';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * <inheritdoc cref="M:Quirco.Accounting.Abstractions.IAccountService.SearchTransactionsGroups(Quirco.Accounting.Abstractions.Models.Accounts.SearchTransactionGroups.Query,System.Threading.CancellationToken)" />
   */
  static searchGroupTransactions(
    params: {
      /** Идентификатор счета плательщика */
      accountId?: number;
      /** Включать ли коррекции, не связанных со счетами */
      excludeCorrectionsForNonInvoiceTransactions?: boolean;
      /** Включать ли коррекции для транзакций из инвойса */
      excludeCorrectionsForInvoiceTransactions?: boolean;
      /** Только транзакции, не включенные в инвойсы */
      withoutInvoiceTransactions?: boolean;
      /** Только доходные транзакции */
      onlyRevenue?: boolean;
      /** Идентификатор счета */
      invoiceId?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupTransactionModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/transactions-groups';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        AccountId: params['accountId'],
        ExcludeCorrectionsForNonInvoiceTransactions: params['excludeCorrectionsForNonInvoiceTransactions'],
        ExcludeCorrectionsForInvoiceTransactions: params['excludeCorrectionsForInvoiceTransactions'],
        WithoutInvoiceTransactions: params['withoutInvoiceTransactions'],
        OnlyRevenue: params['onlyRevenue'],
        InvoiceId: params['invoiceId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class AuthService {
  /**
   *
   */
  static getTokens(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/auth/oidc/tokens';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static fastSignIn(
    params: {
      /**  */
      login?: string;
      /**  */
      password?: string;
      /**  */
      redirectUri?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/auth/oidc/fast-sign-in';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { login: params['login'], password: params['password'], redirectUri: params['redirectUri'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static signIn(
    params: {
      /**  */
      redirectUri?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/auth/oidc/sign-in';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { redirectUri: params['redirectUri'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static signOut(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/auth/oidc/sign-out';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static login(
    params: {
      /** requestBody */
      body?: Login_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TokenModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/users/login';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static refresh(
    params: {
      /** requestBody */
      body?: SingleTokenModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TokenModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/users/refresh';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static verify(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/users/verify';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static logout(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/users/logout';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getPermissions(options: IRequestOptions = {}): Promise<string[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/users/permissions';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUserInfo(options: IRequestOptions = {}): Promise<GetCurrentUserInfo_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/users/user-info';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class CountriesService {
  /**
   * Поиск стран
   */
  static searchCountries(
    params: {
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchCountries_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/profiles/countries';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class CreditCardTerminalService {
  /**
   * Осуществляет поиск доступных терминалов кредитных карт в системе
   */
  static searchDevices(
    params: {
      /** Тип устройства */
      type?: ExternalDeviceType;
      /** Рабочие станции, к которым подключены устройства */
      workstationIds?: any | null[];
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchExternalDevices_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/credit-card-terminal';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Type: params['type'],
        WorkstationIds: params['workstationIds'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Проверка пинпада
   */
  static testPinPad(
    params: {
      /** Идентификатор устройства */
      deviceId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TestPinPadResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/credit-card-terminal/pin-pad-test/{deviceId}';
      url = url.replace('{deviceId}', params['deviceId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Распечатать сводный чек/контрольную ленту
   */
  static getShiftStatistics(
    params: {
      /** Идентификатор устройства */
      deviceId: number;
      /** requestBody */
      body?: GetStatisticsRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetStatisticsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/credit-card-terminal/shift-statistics/{deviceId}';
      url = url.replace('{deviceId}', params['deviceId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Закрытие дня
   */
  static closeDay(
    params: {
      /** Идентификатор устройства */
      deviceId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetStatisticsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/credit-card-terminal/close-day/{deviceId}';
      url = url.replace('{deviceId}', params['deviceId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class CustomDocumentsService {
  /**
   *
   */
  static searchCustomDocuments(
    params: {
      /**  */
      scope?: string;
      /**  */
      id?: string;
      /**  */
      customDocumentId?: number;
      /**  */
      contextId?: string;
      /**  */
      parameters?: object;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchAvailablePrintingForms_Model[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/printing-forms';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Scope: params['scope'],
        Id: params['id'],
        CustomDocumentId: params['customDocumentId'],
        ContextId: params['contextId'],
        Parameters: params['parameters']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class DiagnosesService {
  /**
   * Поиск диагнозов для установления причин задания режима/показанности к лечению
   */
  static diagnosesForJustification(
    params: {
      /**  */
      treatmentCaseId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_GetDiagnosesForJustification_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/diagnoses-for-justification';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Подтверждение диагнозов
   */
  static approveDiagnosis(
    params: {
      /**  */
      medicalExaminationId: number;
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<CommandedArray_GetTitlePage_DiagnosisDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/diagnoses/approve';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Отклонение диагнозов
   */
  static rejectDiagnosis(
    params: {
      /**  */
      medicalExaminationId: number;
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<CommandedArray_GetTitlePage_DiagnosisDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/diagnoses/reject';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление диагнозов
   */
  static deleteDiagnoses(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/diagnoses';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Добавление диагноза из приема
   */
  static createLocal(
    params: {
      /**  */
      medicalExaminationId: number;
      /** requestBody */
      body?: CreateDiagnosis_CreateModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<CommandedArray_GetTitlePage_DiagnosisDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/diagnoses';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Редактирование диагноза
   */
  static createLocal1(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: UpdateDiagnosis_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetDiagnosisById_DetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/diagnoses/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Установка или снятие признака основного диагноза
   */
  static updateMainStatus(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<CommandedArray_GetTitlePage_DiagnosisDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/diagnoses/{id}/main';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Установить, должен ли быть диагноз включен в эпикриз
   */
  static includeInEpicrisis(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: IncludeDiagnosisInEpicrisis_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<CommandedArray_GetTitlePage_DiagnosisDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/diagnoses/{id}/include-in-epicrisis';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class MedicalExaminationsService {
  /**
   * Получение диагнозов, поставленных в рамках приёма
   */
  static getDiagnosis(
    params: {
      /** Идентификатор приёма */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<CommandedArray_GetTitlePage_DiagnosisDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/diagnoses';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение списка прикреплённых документов
   */
  static getPrescriptionAttachments(
    params: {
      /**  */
      medicalExaminationId: number;
      /** Offset from first record. */
      offset?: number;
      /** Number of records to take. */
      limit?: number;
      /** Search query (term) */
      query?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchFiles_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/attachments';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { Offset: params['offset'], Limit: params['limit'], Query: params['query'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на добавления файла к приёму
   */
  static savePrescriptionAttachment(
    params: {
      /**  */
      medicalExaminationId: number;
      /**  */
      file: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/attachments';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['file']) {
        if (Object.prototype.toString.call(params['file']) === '[object Array]') {
          for (const item of params['file']) {
            data.append('file', item as any);
          }
        } else {
          data.append('file', params['file'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Старт консультативного приёма по его назначению или по услуге
   */
  static start(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: StartMedicalExamination_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MedicalExaminationResultModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}/medical-examinations';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение протокола консультативного приёма
   */
  static getMedicalExaminations(
    params: {
      /** Идентификатор начатого отпуска */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MedicalExaminationResultModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение информации о консультативном приёме
   */
  static getInfo(
    params: {
      /** Идентификатор начатого отпуска */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetMedicalExaminationInfo_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/info';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Помечает начатый консультативный приём как "пациент не явился"
   */
  static setMissed(
    params: {
      /**  */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/set-missed';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение назначений, сделанных в рамках приёма
   */
  static getPrescriptions(
    params: {
      /** Идентификатор приёма */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/prescriptions-list';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на значений элементу шаблона
   */
  static setTemplateValues(
    params: {
      /**  */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/set-values';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на значения элементу шаблона
   */
  static setTemplateValue(
    params: {
      /**  */
      medicalExaminationId: number;
      /** requestBody */
      body?: SetMedicalExaminationValueModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/set-value';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Завершение консультации
   */
  static finish(
    params: {
      /**  */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/set-complete';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Установить кабинет для консультации, начатой без диспетчеризации, в котором производится приём
   */
  static setServicePoint(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: SetServicePoint_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{id}/set-service-point';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Установить отпускающих специалистов
   */
  static setTeamMembers(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: SetTeamMembers_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{id}/set-team-members';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление начатого и незаконченного приема
   */
  static deletedStarted(
    params: {
      /** Идентификатор начатого приёма */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Добавление лечебного действия у начатого приема
   */
  static addTreatmentAction(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: AddMedicalExaminationTreatmentAction_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchMedicalExaminationTreatmentActions_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{id}/treatment-actions';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Обновление лечебного действия у начатого приема
   */
  static updateTreatmentAction(
    params: {
      /** Идентификатор начатого приёма */
      id: number;
      /** Идентификатор лечебного действия */
      treatmentActionId: number;
      /** requestBody */
      body?: UpdateExaminationTreatmentAction_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchMedicalExaminationTreatmentActions_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{id}/treatment-actions/{treatmentActionId}';
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{treatmentActionId}', params['treatmentActionId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление лечебного действия у начатого приема
   */
  static deleteTreatmentAction(
    params: {
      /** Идентификатор лечебного действия */
      treatmentActionId: number;
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{id}/treatment-actions/{treatmentActionId}';
      url = url.replace('{treatmentActionId}', params['treatmentActionId'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение лечебных действий приема
   */
  static getTreatmentActions(
    params: {
      /** Идентификатор начатого отпуска */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchMedicalExaminationTreatmentActions_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/treatment-actions';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение списка лучевого воздействия
   */
  static searchImageRadiationImpacts(
    params: {
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchImageRadiationImpacts_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/image-radiation-impacts';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение перенесенного лучевого воздействия в рамках исследования
   */
  static searchMedicalExaminationRadiationImpacts(
    params: {
      /** Идентификатор начатого отпуска */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchMedicalExaminationRadiationImpact_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{medicalExaminationId}/radiation-impacts';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Добавление записи радиционного воздействия у начатого приема
   */
  static addExaminationRadiationImpacts(
    params: {
      /** Идентификатор начатого приёма */
      id: number;
      /** requestBody */
      body?: AddMedicalExaminationRadiationImpact_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-examinations/{id}/radiation-impacts';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Обновление записи радиционного воздействия у начатого приема
   */
  static updateExaminationRadiationImpacts(
    params: {
      /** Идентификатор начатого приёма */
      id: number;
      /** Идентификатор радиционного воздействия */
      medicalExaminationRadiationImpactId: number;
      /** requestBody */
      body?: UpdateExaminationRadiationImpact_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url =
        basePath +
        '/api/medical-records/medical-examinations/{id}/radiation-impacts/{medicalExaminationRadiationImpactId}';
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{medicalExaminationRadiationImpactId}', params['medicalExaminationRadiationImpactId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление записи радиационного воздействия у начатого приема
   */
  static deleteExaminationRadiationImpacts(
    params: {
      /** Идентификатор радиционного воздействия */
      medicalExaminationRadiationImpactId: number;
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url =
        basePath +
        '/api/medical-records/medical-examinations/{id}/radiation-impacts/{medicalExaminationRadiationImpactId}';
      url = url.replace('{medicalExaminationRadiationImpactId}', params['medicalExaminationRadiationImpactId'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class DietsService {
  /**
   * Осуществляет поиск среди справочника диет
   */
  static searchDiets(
    params: {
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchDiets_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/nutrition/diets';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Добавление диеты к лечебному случаю. В неамбулаторных ИБ даты диет заполняют весь срок лечения
   */
  static createDiets(
    params: {
      /**  */
      treatmentCaseId: number;
      /** requestBody */
      body?: CreateUpdateTreatmentCaseDiet_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentCaseDiets_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/diets';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление диеты пациента. В неамбулаторных ИБ даты диет заполняют весь срок лечения
   */
  static deleteDiets(
    params: {
      /**  */
      treatmentCaseId: number;
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentCaseDiets_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/diets';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Обновление диеты пациента. В неамбулаторных ИБ даты диет заполняют весь срок лечения
   */
  static updateDiets(
    params: {
      /**  */
      treatmentCaseId: number;
      /**  */
      id: number;
      /** requestBody */
      body?: CreateUpdateTreatmentCaseDiet_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentCaseDiets_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/diets/{id}';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class DispatchingService {
  /**
   * Поиск лечебных случаев c их назначениями для диспетчеризации
   */
  static searchDispatching(
    params: {
      /** Фильтр по санаторным программам */
      sanatoriumProgramIds?: any | null[];
      /** Выводить только пациентов с недиспетчеризованными назначениями */
      onlyUndispatched?: boolean;
      /** Лечебное заведение в рамках которого происходит поиск */
      facilityId?: number;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentCasesForDispatch_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        SanatoriumProgramIds: params['sanatoriumProgramIds'],
        OnlyUndispatched: params['onlyUndispatched'],
        FacilityId: params['facilityId'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск назначений у лечебного случая для диспетчеризации
   */
  static searchPrescriptionForDispatch(
    params: {
      /**  */
      treatmentCaseId: number;
      /**  */
      query?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchPrescriptionsForDispatch_PrescriptionDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/treatment-cases/{treatmentCaseId}/prescriptions';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { query: params['query'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение листа назначений для диспетчеризации
   */
  static getPrescriptionDispatchingList(
    params: {
      /**  */
      treatmentCaseId: number;
      /** Идентификатор лечебного случая */
      treatmentCaseId?: number;
      /** Название назначения */
      name?: string;
      /** Способ оплаты */
      fundingSourceId?: number;
      /** Ссылка на лечебную или санаторную программу */
      treatmentCaseTreatmentProgramId?: number;
      /** Выводить полностью диспетчеризованные */
      isDispatched?: boolean;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionDispatchingList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/treatment-cases/{treatmentCaseId}/dispatching-prescription-list';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        TreatmentCaseId: params['treatmentCaseId'],
        Name: params['name'],
        FundingSourceId: params['fundingSourceId'],
        TreatmentCaseTreatmentProgramId: params['treatmentCaseTreatmentProgramId'],
        IsDispatched: params['isDispatched']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Создание резерва в кабинете
   */
  static createReserve(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: MakeReservation_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/service-points/{id}/reserve';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Диспетчеризация назначения в кабинет
   */
  static dispatch(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: DispatchPrescription_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/service-points/{id}/dispatch';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Изменение существующих диспетчеризаций
   */
  static dispatchUpdate(
    params: {
      /** requestBody */
      body?: UpdateScheduleItem_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/service-points/schedule-items/update';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск информации о кабинетах для диспетчеризации назначения
   */
  static searchServicePointsForDispatch(
    params: {
      /** Ссылка на назначение */
      prescriptionId?: number;
      /** Ссылка на услугу */
      serviceItemId?: number;
      /** Дата начала расписания */
      startDate?: string;
      /** Дата окончания расписания */
      endDate?: string;
      /**  */
      prescriptionId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchServicePointsForDispatch_Model[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/prescriptions/{prescriptionId}/service-points';
      url = url.replace('{prescriptionId}', params['prescriptionId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        PrescriptionId: params['prescriptionId'],
        ServiceItemId: params['serviceItemId'],
        StartDate: params['startDate'],
        EndDate: params['endDate']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение расписания для кабиентов
   */
  static getServicePointsSchedules(
    params: {
      /** Идентификаторы кабинетов */
      servicePointIds?: any | null[];
      /** Идентификатор назначения */
      prescriptionId?: number;
      /** Идентификатор услуги */
      serviceItemId?: number;
      /** Дата начала расписания */
      startDate?: string;
      /** Дата окончания расписания */
      endDate?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetServicePointsSchedules_Model[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/service-points/schedules';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        ServicePointIds: params['servicePointIds'],
        PrescriptionId: params['prescriptionId'],
        ServiceItemId: params['serviceItemId'],
        StartDate: params['startDate'],
        EndDate: params['endDate']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получить детальную информацию о диспетчеризациях
   */
  static getScheduleItems(
    params: {
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_GetScheduleItems_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/service-points/schedule-items';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление элемента расписания
   */
  static deleteScheduleItem(
    params: {
      /** Идентификатор */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/schedule-item/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение uri для скачивания расписания кабинета
   */
  static getServicePointsScheduleUri(
    params: {
      /** Идентификатор кабинета */
      servicePointId?: number;
      /** Дата начала */
      startDate?: string;
      /** Дата окончания */
      endDate?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/dispatching/service-points/schedule-printing-form-uri';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        ServicePointId: params['servicePointId'],
        StartDate: params['startDate'],
        EndDate: params['endDate']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class DocumentTypesService {
  /**
   * Поиск типов документа
   */
  static searchDocumentTypes(
    params: {
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchDocumentTypes_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/profiles/document-types';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class EmployeesService {
  /**
   * Поиск персонала
   */
  static searchEmployees(
    params: {
      /** Роль сотрудника */
      role?: StandardRole;
      /** Пользователь, с которым ассоцирован сотрудник */
      userId?: number;
      /** Включать ли в результат информацию о ролях пользователя */
      includeRolesInfo?: boolean;
      /** Орг. структуры, в которых находится сотрудник */
      organizationUnitIds?: any | null[];
      /** Кубинеты, в которых находится сотрудник */
      servicePointIds?: any | null[];
      /** Услуги, которые доступны сотруднику */
      serviceItemIds?: any | null[];
      /** Email */
      email?: string;
      /** Телефон сотрудника */
      phoneNumber?: string;
      /** Роли сотрудника */
      roles?: any | null[];
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_EmployeeModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/personnel/employees';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Role: params['role'],
        UserId: params['userId'],
        IncludeRolesInfo: params['includeRolesInfo'],
        OrganizationUnitIds: params['organizationUnitIds'],
        ServicePointIds: params['servicePointIds'],
        ServiceItemIds: params['serviceItemIds'],
        Email: params['email'],
        PhoneNumber: params['phoneNumber'],
        Roles: params['roles'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class EnumsService {
  /**
   *
   */
  static getEnums(options: IRequestOptions = {}): Promise<GetEnums_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/general/enums';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class FacilityService {
  /**
   * Вывод информации об объекте
   */
  static searchById(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetFacilityInfo_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/facility/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Вывод информации об объекте по умолчанию
   */
  static getFacility(options: IRequestOptions = {}): Promise<GetFacilityInfo_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/facility';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class FieldsService {
  /**
   * Создание нового поля формы
   */
  static createFields(
    params: {
      /** requestBody */
      body?: CreateUpdateField_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FieldDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/fields';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Обновление поля формы
   */
  static updateFields(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: CreateUpdateField_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FieldDetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/fields/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление поля формы
   */
  static deleteFields(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/fields/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск полей формы
   */
  static searchFields(
    params: {
      /** Идентификатор сущности, к которой принадлежит значение поля
Требуется, если не указаны идентификаторы значений */
      ownerId?: string;
      /** Идентификаторы значений */
      fieldValueIds?: any | null[];
      /** Идентификтор группы поля */
      formGroupId?: number;
      /**  */
      includeDeleted?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_FieldModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/fields/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        OwnerId: params['ownerId'],
        FieldValueIds: params['fieldValueIds'],
        FormGroupId: params['formGroupId'],
        IncludeDeleted: params['includeDeleted'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class FieldValuesService {
  /**
   * Установка значение поля формы
   */
  static set(
    params: {
      /**  */
      ownerId: string;
      /**  */
      fieldId: number;
      /** requestBody */
      body?: FieldValueSetModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FieldModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/field-values';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { ownerId: params['ownerId'], fieldId: params['fieldId'] };

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Возвращает форму с группами и полями по идентификатору формы конкретного владельца
   */
  static getForm(
    params: {
      /**  */
      ownerId: string;
      /**  */
      formId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FormModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/field-values';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { ownerId: params['ownerId'], formId: params['formId'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Установка значений поля формы
   */
  static setValues(
    params: {
      /** requestBody */
      body?: SetFieldValuesCommand;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/field-values/set-values';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск истории изменений значения поля формы
   */
  static getFieldValueHistory(
    params: {
      /** Identified for field */
      fieldId?: number;
      /** Identifier for owner */
      ownerId?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_FieldValueModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/field-values/history';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fieldId: params['fieldId'], ownerId: params['ownerId'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class FileStorageService {
  /**
   * Удаление файла
   */
  static deleteAttachment(
    params: {
      /** Ключ-идентификатор файла */
      key: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/file-storage/attachments/{key}';
      url = url.replace('{key}', params['key'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение прикреплённого файла по его ключу
   */
  static getAttachment(
    params: {
      /** Запрос */
      key: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/file-storage/attachments/{key}';
      url = url.replace('{key}', params['key'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение списка доступных категорий
   */
  static searchAttachmentCategories(
    params: {
      /** Тип сущности, для которой искать категории */
      categoryEntityType?: AttachmentCategoryEntityType;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchAttachmentCategories_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/file-storage/attachments/categories';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        CategoryEntityType: params['categoryEntityType'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Установка категории
   */
  static setAttachmentCategory(
    params: {
      /** Ключ-идентификатор файла */
      key: string;
      /** Идентификатор категории */
      categoryId?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/file-storage/attachments/{key}/set-category';
      url = url.replace('{key}', params['key'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);
      configs.params = { categoryId: params['categoryId'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Изменение данных о файле
   */
  static updateFileMetadata(
    params: {
      /** requestBody */
      body?: UpdateFileMetadata_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/file-storage/attachments/update-metadata';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение превью прикреплённого файла по его ключу
   */
  static getAttachmentPreview(
    params: {
      /** ключ файла */
      key?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/file-storage/attachments/preview';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { key: params['key'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class FiscalsService {
  /**
   * Осуществляет поиск доступных фискальных регистраторов в системе
   */
  static searchDevices(
    params: {
      /** Тип устройства */
      type?: ExternalDeviceType;
      /** Рабочие станции, к которым подключены устройства */
      workstationIds?: any | null[];
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchExternalDevices_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/fiscals';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = {
        Type: params['type'],
        WorkstationIds: params['workstationIds'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Возвращает статус устройства
   */
  static getStatus(
    params: {
      /** Идентификатор устройства */
      deviceId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetFiscalStatusResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/fiscals/status/{deviceId}';
      url = url.replace('{deviceId}', params['deviceId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Внести наличные в кассу
   */
  static putCash(
    params: {
      /** Идентификатор устройства */
      deviceId: number;
      /** requestBody */
      body?: CashFiscalModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PutCashFiscalResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/fiscals/put-cash/{deviceId}';
      url = url.replace('{deviceId}', params['deviceId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Изьять наличные из кассы
   */
  static takeCash(
    params: {
      /** Идентификатор устройства */
      deviceId: number;
      /** requestBody */
      body?: CashFiscalModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TakeCashFiscalResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/fiscals/take-cash/{deviceId}';
      url = url.replace('{deviceId}', params['deviceId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Распечатать отчёт (X-отчёт, Z-отчёт и т.п.)
   */
  static report(
    params: {
      /** Идентификатор устройства */
      deviceId: number;
      /** requestBody */
      body?: PrintReportFiscalModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PrintReportFiscalResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/fiscals/report/{deviceId}';
      url = url.replace('{deviceId}', params['deviceId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Открыть кассовую смену
   */
  static openShift(
    params: {
      /** Идентификатор устройства */
      deviceId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<OpenShiftResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/fiscals/open-shift/{deviceId}';
      url = url.replace('{deviceId}', params['deviceId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получить сумму наличных в кассе
   */
  static getCashboxAmount(
    params: {
      /** Идентификатор устройства */
      deviceId: number;
      /** requestBody */
      body?: GetCashBoxAmountFiscalRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetCashboxAmountFiscalResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/fiscals/get-cashbox-amount/{deviceId}';
      url = url.replace('{deviceId}', params['deviceId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Фискализация транзакций
   */
  static createFiscalCheck(
    params: {
      /** requestBody */
      body?: CreateFiscalCheckForTransactions_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/fiscals/create-fiscal-check';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class FormGroupsService {
  /**
   * Создание новой группы формы
   */
  static createFormGroups(
    params: {
      /** requestBody */
      body?: CreateUpdateFormGroup_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetFormGroupById_DetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/form-groups';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Обновление группы формы
   */
  static updateFormGroups(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: CreateUpdateFormGroup_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetFormGroupById_DetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/form-groups/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление группы формы
   */
  static deleteFormGroups(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/form-groups/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class FormsService {
  /**
   * Возвращает фому по его идентификатору
   */
  static getForms(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetFormById_DetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/forms/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Обновление формы
   */
  static updateForms(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: CreateUpdateForm_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetFormById_DetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/forms/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Создание новой формы
   */
  static createForms(
    params: {
      /** requestBody */
      body?: CreateUpdateForm_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetFormById_DetailedModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/forms';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск форм
   */
  static list(
    params: {
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchForms_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/forms/forms';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class IcdItemsService {
  /**
   * Поиск болезней из МКБ
   */
  static searchIcdItems(
    params: {
      /** Искать только в детях данного узла */
      parentItemId?: number;
      /** Включать ли дочерние поддеревья в результаты поиска */
      includeChildren?: boolean;
      /** Включать только активные элементы */
      onlyActive?: boolean;
      /** Поисковая строка */
      query?: string;
      /** Лимит */
      limit?: number;
      /** Скрывать ли одиночный рутовый элемент */
      hideSingleRoot?: boolean;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TreeDictionaryModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/icd-items';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        ParentItemId: params['parentItemId'],
        IncludeChildren: params['includeChildren'],
        OnlyActive: params['onlyActive'],
        Query: params['query'],
        Limit: params['limit'],
        HideSingleRoot: params['hideSingleRoot'],
        IncludeDeleted: params['includeDeleted']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Предложения услуг для МКБ
   */
  static searchIcdItemServiceItems(
    params: {
      /**  */
      treatmentCaseId: number;
      /**  */
      icdItemIds: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchIcdItemServiceItems_Model[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/icd-items/service-items';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { icdItemIds: params['icdItemIds'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск противопоказаний (в виде услуг) для болезни из МКБ. Противопоказания наследуются из верхних узлов МКБ, учитываются группы услуг
   */
  static searchIcdItemContraindications(
    params: {
      /** Идентификатор болезни из МКБ */
      icdItemIds?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchIcdItemContraindications_Model[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/icd-items/contraindications';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { IcdItemIds: params['icdItemIds'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class IdentityService {
  /**
   *
   */
  static changePassword(
    params: {
      /** requestBody */
      body?: ChangePassword_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/identity/password/change';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static setPassword(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: IdentityController_Password;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/identity/users/{id}/set-password';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class InsurancePolicyTypesService {
  /**
   * Поиск типов полисов
   */
  static searchInsurancePolicyTypes(
    params: {
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchInsurancePolicyTypes_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/profiles/insurance-policy-types';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class LaboratoryService {
  /**
   * Поиск лабораторных исследований для забора биоматериала
   */
  static searchForTaking(
    params: {
      /** Поиск только по выбранным услугам (и их детям) */
      serviceItemIds?: any | null[];
      /** Ограничивает назначения наличию диспетчеризации на конкретную дату
Если не задано - выводятся недиспетчеризированные назначения */
      onDate?: string;
      /** Поиск по исследованиям для внешней лаборатории */
      externalLabId?: number;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_PrescriptionProbeModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/biomaterial-taking';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        ServiceItemIds: params['serviceItemIds'],
        OnDate: params['onDate'],
        ExternalLabId: params['externalLabId'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Выполнение забора материалов лабораторного исследования
   */
  static markAsTaken(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/biomaterial-taking/mark-as-taken';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Создание заказа лабораторного исследования
   */
  static createProbeOrder(
    params: {
      /** requestBody */
      body?: CreateProbeOrder_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/probe-order';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение списка прикреплённых документов
   */
  static getPrescriptionAttachments(
    params: {
      /**  */
      medicalExaminationId: number;
      /** Offset from first record. */
      offset?: number;
      /** Number of records to take. */
      limit?: number;
      /** Search query (term) */
      query?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchFiles_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/medical-examinations/{medicalExaminationId}/attachments';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { Offset: params['offset'], Limit: params['limit'], Query: params['query'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на добавления файла к приёму
   */
  static savePrescriptionAttachment(
    params: {
      /**  */
      medicalExaminationId: number;
      /**  */
      file: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/medical-examinations/{medicalExaminationId}/attachments';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['file']) {
        if (Object.prototype.toString.call(params['file']) === '[object Array]') {
          for (const item of params['file']) {
            data.append('file', item as any);
          }
        } else {
          data.append('file', params['file'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск лабораторных исследований для заполнения результатов
   */
  static searchLaboratory(
    params: {
      /** Поиск только по выбранным услугам (и их детям) */
      serviceItemIds?: any | null[];
      /** Ограничивает назначения наличию диспетчеризации на конкретную дату
Если не задано - выводятся недиспетчеризированные назначения */
      onDate?: string;
      /** Поиск по исследованиям для внешней лаборатории */
      externalLabId?: number;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_PrescriptionProbeModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        ServiceItemIds: params['serviceItemIds'],
        OnDate: params['onDate'],
        ExternalLabId: params['externalLabId'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Расширенный поиск лабораторных исследований
   */
  static searchDetailed(
    params: {
      /** Поиск только по выбранным услугам (и их детям) */
      serviceItemIds?: any | null[];
      /** Поиск по исследованиям для внешней лаборатории */
      externalLabId?: number;
      /** Искать среди закрытых историй */
      includeClosedMedicalRecords?: boolean;
      /** Лечащий врач */
      doctorIds?: any | null[];
      /** Статус назначения */
      status?: PrescriptionStatus[];
      /** Ограничение по результатам исследования. Только для завершенных исследований (незавершенные попадают в выборку) */
      labResult?: GenericExaminationResult[];
      /** Назначение создано в период с */
      prescriptionCreatedDateFrom?: string;
      /** Назначение создано в период по */
      prescriptionCreatedDateTo?: string;
      /** Забор биоматериала с */
      biomaterialTakenDateFrom?: string;
      /** Забор биоматериала по */
      biomaterialTakenDateTo?: string;
      /** Результаты исследования получены с */
      prescriptionCompletedDateFrom?: string;
      /** Результаты исследования полученыпо */
      prescriptionCompletedDateTo?: string;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_PrescriptionProbeModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        ServiceItemIds: params['serviceItemIds'],
        ExternalLabId: params['externalLabId'],
        IncludeClosedMedicalRecords: params['includeClosedMedicalRecords'],
        DoctorIds: params['doctorIds'],
        Status: params['status'],
        LabResult: params['labResult'],
        PrescriptionCreatedDateFrom: params['prescriptionCreatedDateFrom'],
        PrescriptionCreatedDateTo: params['prescriptionCreatedDateTo'],
        BiomaterialTakenDateFrom: params['biomaterialTakenDateFrom'],
        BiomaterialTakenDateTo: params['biomaterialTakenDateTo'],
        PrescriptionCompletedDateFrom: params['prescriptionCompletedDateFrom'],
        PrescriptionCompletedDateTo: params['prescriptionCompletedDateTo'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение протокола лабораторного исследования
   */
  static getLaboratory(
    params: {
      /** Идентификатор назначения */
      prescriptionId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetLabTestResult_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/{prescriptionId}';
      url = url.replace('{prescriptionId}', params['prescriptionId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение информации о лабораторном исследовании
   */
  static getInfo(
    params: {
      /** Идентификатор назначения */
      prescriptionId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetLabTestInfo_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/{prescriptionId}/info';
      url = url.replace('{prescriptionId}', params['prescriptionId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск по справочнику внешних лабораторий
   */
  static searchExternalLabs(
    params: {
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchExternalLabs_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/external-labs';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Заполнение результатов лабораторного исследование
   */
  static setLabTestData(
    params: {
      /** Идентификаторы назначений */
      medicalExaminationId: number;
      /** requestBody */
      body?: SetLabTestData_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/medical-examinations/{medicalExaminationId}';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Завершение лабораторного исследование
   */
  static finishLabTest(
    params: {
      /** Идентификаторы назначений */
      medicalExaminationId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/medical-examinations/{medicalExaminationId}/set-complete';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Установить отпускающих специалистов
   */
  static setLabTestTeamMembers(
    params: {
      /**  */
      medicalExaminationId: number;
      /** requestBody */
      body?: SetLabTestTeamMembers_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/medical-examinations/{medicalExaminationId}/set-team-members';
      url = url.replace('{medicalExaminationId}', params['medicalExaminationId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение биоматериалов и связанных с ними контейнерами для назначений
   */
  static getPrescriptionBiomaterials(
    params: {
      /**  */
      prescriptionIds?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionBiomaterials_Model[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/lab-test-biomaterials';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { PrescriptionIds: params['prescriptionIds'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение преаналитики для заказа лаб исследования
   */
  static getProbeOrderPreAnalytics(
    params: {
      /** requestBody */
      body?: GetProbeOrderPreAnalytics_Query;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetProbeOrderPreAnalytics_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/laboratory/pre-analytics';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class MeasurementsService {
  /**
   * Получение листов измерений лечебного случая
   */
  static getMeasurementSheets(
    params: {
      /**  */
      treatmentCaseId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetTreatmentCaseMeasurementSheets_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/treatment-cases/{treatmentCaseId}/measurements';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск записей листа измерений
   */
  static searchMeasurementSheetRecords(
    params: {
      /**  */
      measurementSheetId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_MeasurementSheetRecordModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/measurements/measurement-sheets/{measurementSheetId}';
      url = url.replace('{measurementSheetId}', params['measurementSheetId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Создание записи измерения
   */
  static createUpdateMeasurementSheetRecord(
    params: {
      /**  */
      measurementSheetId: string;
      /** requestBody */
      body?: CreateUpdateMeasurementSheetRecord_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MeasurementSheetRecordModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/measurements/measurement-sheets/{measurementSheetId}';
      url = url.replace('{measurementSheetId}', params['measurementSheetId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Создание листа измерения
   */
  static createMeasurementSheet(
    params: {
      /**  */
      treatmentCaseId: number;
      /** requestBody */
      body?: CreateMeasurementSheet_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MeasurementSheetModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/measurements/treatment-cases/{treatmentCaseId}';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Обновление записи измерения
   */
  static createUpdateMeasurementSheetRecord1(
    params: {
      /**  */
      measurementSheetRecordId: number;
      /** requestBody */
      body?: CreateUpdateMeasurementSheetRecord_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MeasurementSheetRecordModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/measurements/measurement-sheet-record/{measurementSheetRecordId}';
      url = url.replace('{measurementSheetRecordId}', params['measurementSheetRecordId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление записи измерения
   */
  static deleteMeasurementSheetRecord(
    params: {
      /**  */
      measurementSheetRecordId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/measurements/measurement-sheet-record/{measurementSheetRecordId}';
      url = url.replace('{measurementSheetRecordId}', params['measurementSheetRecordId'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск типов измерений
   */
  static searchMeasurementTypes(
    params: {
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_DictionaryModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/measurements';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class MedicalOrganizationsService {
  /**
   * Поиск мест отбора
   */
  static searchMedicalOrganizations(
    params: {
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchMedicalOrganizations_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medical-organizations';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class MedicalRecordsService {
  /**
   * Получение списка прикреплённых документов
   */
  static getTreatmentCaseAttachments(
    params: {
      /**  */
      id: number;
      /** Offset from first record. */
      offset?: number;
      /** Number of records to take. */
      limit?: number;
      /** Search query (term) */
      query?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchFiles_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}/attachments';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { Offset: params['offset'], Limit: params['limit'], Query: params['query'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на добавления файла к лечебному случаю
   */
  static saveTreatmentCaseAttachment(
    params: {
      /**  */
      id: number;
      /**  */
      file: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}/attachments';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['file']) {
        if (Object.prototype.toString.call(params['file']) === '[object Array]') {
          for (const item of params['file']) {
            data.append('file', item as any);
          }
        } else {
          data.append('file', params['file'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск ИБ (заездов)
   */
  static searchMedicalRecords(
    params: {
      /** Номер ИБ */
      recordNo?: string;
      /** Проживал в учреждении с */
      wasOnTreatmentFrom?: string;
      /** Проживал в учреждении по */
      wasOnTreatmentTo?: string;
      /** Был на приеме с */
      examinationStartDate?: string;
      /** Был на приеме по */
      examinationEndDate?: string;
      /** Дата приезда */
      arrivalDateFrom?: string;
      /** Дата выезда */
      arrivalDateTo?: string;
      /** Дата выезда с */
      departureDateFrom?: string;
      /** Дата выезда по */
      departureDateTo?: string;
      /** Возраст с */
      ageFrom?: number;
      /** Возраст по */
      ageTo?: number;
      /** Пол */
      sex?: Sex;
      /** Лечащий врач */
      doctorIds?: any | null[];
      /** Палатная сестра */
      wardNurseIds?: any | null[];
      /** Теги ИБ */
      tagIds?: any | null[];
      /** Диагноз */
      diagnosisIcdItemIds?: any | null[];
      /** Искать диагноз только среди основных */
      onlyMainDiagnosis?: boolean;
      /** Показания к лечению */
      treatmentIndicationIds?: any | null[];
      /** Основная программа */
      sanatoriumProgramIds?: any | null[];
      /** Лечебные программы */
      treatmentProgramIds?: any | null[];
      /** Услуги. Для диагностических услуг ищутся только завершенные, для остальных - все активные или завершенные */
      serviceItemIds?: any | null[];
      /** Включать закрытые истории */
      includeClosed?: boolean;
      /** Тип истории болезни */
      medicalRecordType?: MedicalRecordType;
      /** Ссылка на объект/санаторий */
      facilityId?: number;
      /** С назначением медикамента
Поиск по названию */
      medicine?: string;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentCases_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        RecordNo: params['recordNo'],
        WasOnTreatmentFrom: params['wasOnTreatmentFrom'],
        WasOnTreatmentTo: params['wasOnTreatmentTo'],
        ExaminationStartDate: params['examinationStartDate'],
        ExaminationEndDate: params['examinationEndDate'],
        ArrivalDateFrom: params['arrivalDateFrom'],
        ArrivalDateTo: params['arrivalDateTo'],
        DepartureDateFrom: params['departureDateFrom'],
        DepartureDateTo: params['departureDateTo'],
        AgeFrom: params['ageFrom'],
        AgeTo: params['ageTo'],
        Sex: params['sex'],
        DoctorIds: params['doctorIds'],
        WardNurseIds: params['wardNurseIds'],
        TagIds: params['tagIds'],
        DiagnosisIcdItemIds: params['diagnosisIcdItemIds'],
        OnlyMainDiagnosis: params['onlyMainDiagnosis'],
        TreatmentIndicationIds: params['treatmentIndicationIds'],
        SanatoriumProgramIds: params['sanatoriumProgramIds'],
        TreatmentProgramIds: params['treatmentProgramIds'],
        ServiceItemIds: params['serviceItemIds'],
        IncludeClosed: params['includeClosed'],
        MedicalRecordType: params['medicalRecordType'],
        FacilityId: params['facilityId'],
        Medicine: params['medicine'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на создание титульной страницы
   */
  static createTitlePage(
    params: {
      /** requestBody */
      body?: SetTitlePage_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск пациентов, относящихся к текущему пользователю
   */
  static myPatients(
    params: {
      /** Ссылка на объект/санаторий */
      facilityId?: number;
      /** Дата, с которой ищутся заезды. По-умолчанию - минус 2 недели с текущей даты. Нужна чтобы не попадали старые заезды */
      searchDate?: string;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_TreatmentCaseModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/my-patients';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        FacilityId: params['facilityId'],
        SearchDate: params['searchDate'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск диспетчеризованных консультаций, относящихся к текущему пользователю
   */
  static myDispatchedConsultations(
    params: {
      /** Ссылка на объект/санаторий */
      facilityId?: number;
      /** Дата */
      searchDate?: string;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchMyDispatchedConsultations_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/my-dispatched-consultations';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        FacilityId: params['facilityId'],
        SearchDate: params['searchDate'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Запрос на выборку титульной страницы
   */
  static getTitlePage(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetTitlePage_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на обновление титульной страницы
   */
  static setTitlePage(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: SetTitlePage_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение консультаций и инструментальных исследований для старта
   */
  static getConsultationsForStart(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_GetConsultationsForStart_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}/consultations/for-start';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Оглавление лечебного случая
   */
  static getTreatmentCaseToc(
    params: {
      /**  */
      id: number;
      /**  */
      scope?: GetTreatmentCaseToc_TreatmentCaseScope;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetTreatmentCaseToc_TableOfContents> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}/toc';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { scope: params['scope'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение данных для хэдера лечебного случая
   */
  static getTreatmentCaseHeader(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetTreatmentCaseHeader_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}/header';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Доступные лечащие врачи
   */
  static getAvailableDoctors(options: IRequestOptions = {}): Promise<PagedResponse_EmployeeModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/available-doctors';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Доступные палатные медсестры
   */
  static getAvailableNurses(options: IRequestOptions = {}): Promise<PagedResponse_EmployeeModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/available-nurses';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Закрытие лечебных случаев
   */
  static closeTreatmentCase(
    params: {
      /** requestBody */
      body?: CloseTreatmentCases_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/close';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Добавление тегов ИБ
   */
  static setMedicalRecordTags(
    params: {
      /** идентификатор лечебного случая */
      id: number;
      /** requestBody */
      body?: SetMedicalRecordTagsModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetTreatmentCaseHeader_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}/tags';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление тегов ИБ
   */
  static deleteMedicalRecordTags(
    params: {
      /** идентификатор лечебного случая */
      id: number;
      /** идентификатор тега */
      medicalRecordTagId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}/tags/{medicalRecordTagId}';
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{medicalRecordTagId}', params['medicalRecordTagId'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Журнал изменений лечебного случая
   */
  static searchTreatmentCaseChanges(
    params: {
      /** Ссылка на лечебный случай */
      treatmentCaseId?: number;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentCaseChanges_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{id}/changes';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        TreatmentCaseId: params['treatmentCaseId'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Загрузка внешней ИБ
   */
  static getExternalMedicalRecord(
    params: {
      /**  */
      treatmentCaseId: number;
      /**  */
      externalId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/treatment-cases/{treatmentCaseId}/external/{externalId}';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');
      url = url.replace('{externalId}', params['externalId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск особых отметок
   */
  static searchSpecialMarks(
    params: {
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchSpecialMarks_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/special-marks';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class MedicineService {
  /**
   * Поиск медикаментов
   */
  static searchMedicines(
    params: {
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchMedicines_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medicine';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Создание медикамента
   */
  static createMedicine(
    params: {
      /** requestBody */
      body?: CreateUpdateMedicine_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medicine';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск медикаментов с остатками на складах
   */
  static searchMedicinesStock(
    params: {
      /** Список складов, на которых есть остатки медикамента */
      warehouseId?: number;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchMedicinesStock_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medicine/stock';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        WarehouseId: params['warehouseId'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class NotificationService {
  /**
   *
   */
  static getNotificationsCounter(options: IRequestOptions = {}): Promise<GetNotificationsCounter_NotificationGroup[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/notifications/unread';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static searchNotification(
    params: {
      /** Важность */
      severityLevel?: NotificationSeverityLevel;
      /** Дата создания события с */
      dateCreatedFrom?: string;
      /** Дата создания события по */
      dateCreatedTo?: string;
      /** Только непрочитанные сообщения */
      unreadOnly?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchNotifications_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/notifications';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        SeverityLevel: params['severityLevel'],
        DateCreatedFrom: params['dateCreatedFrom'],
        DateCreatedTo: params['dateCreatedTo'],
        UnreadOnly: params['unreadOnly'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static markAsRead(
    params: {
      /** requestBody */
      body?: MarkAsRead_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/notifications/mark-as-read';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class NutritionService {
  /**
   * Поиск схем питания для лечебного случая
   */
  static searchNutrition(
    params: {
      /**  */
      treatmentCaseId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TreatmentCaseNutritionModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/nutrition';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Создание исключения/дополнения питания
   */
  static createNutritionExtra(
    params: {
      /** Идентификатор лечебного случая */
      treatmentCaseId: number;
      /** requestBody */
      body?: CreateUpdateNutritionExtra_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchTreatmentCaseFoodAllergens_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/nutrition-extra';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Изменение исключения/дополнения питания
   */
  static updateNutritionExtra(
    params: {
      /** Идентификатор лечебного случая */
      treatmentCaseId: number;
      /** Идентификатор дополнения/исключения */
      id: number;
      /** requestBody */
      body?: CreateUpdateNutritionExtra_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchTreatmentCaseFoodAllergens_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/nutrition-extra/{id}';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление исключения/дополнения питания
   */
  static deleteNutritionExtra(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/nutrition-extra/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Список аллергенов лечебного случая
   */
  static searchAllergens(
    params: {
      /**  */
      treatmentCaseId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentCaseFoodAllergens_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/allergens';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Создание аллергена
   */
  static createAllergen(
    params: {
      /** Идентификатор лечебного случая */
      treatmentCaseId: number;
      /** Наименование аллергена */
      allergenName?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchTreatmentCaseFoodAllergens_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/allergens';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { allergenName: params['allergenName'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Изменение аллергена
   */
  static updateAllergen(
    params: {
      /** Идентификатор лечебного случая */
      treatmentCaseId: number;
      /** Идентификатор аллергена */
      id: number;
      /** Наименование аллергена */
      allergenName?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchTreatmentCaseFoodAllergens_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/allergens/{id}';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);
      configs.params = { allergenName: params['allergenName'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление аллергена
   */
  static deleteAllergen(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/allergens/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Добавление комментария к питанию
   */
  static setNutritionComment(
    params: {
      /** Идентификатор лечебного случая */
      treatmentCaseId: number;
      /** requestBody */
      body?: SetNutritionComment_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/nutrition-comment';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class OrganizationUnitsService {
  /**
   * Поиск орг структуры
   */
  static searchOrganizationUnits(
    params: {
      /** Тип орг. структуры */
      unitType?: OrganizationUnitType;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_OrganizationUnitModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/personnel/organization-units';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        UnitType: params['unitType'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class PaymentService {
  /**
   * Оплата счёта
   */
  static payInvoice(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: PayInvoiceModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/invoice/{id}/pay';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class PaymentInstrumentService {
  /**
   * Осуществляет поиск доступных кодов транзакций
   */
  static searchTransactionCodes(
    params: {
      /** Доходная ли транзакция */
      isRevenue?: boolean;
      /** Транзакция фискализируется как аванс */
      isAdvance?: boolean;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTransactionCodes_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/accounting/payment-instrument/transaction-codes';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IsRevenue: params['isRevenue'],
        IsAdvance: params['isAdvance'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class PrescriptionsService {
  /**
   * Основной лист назначений
   */
  static mainPrescriptionList(
    params: {
      /** Идентификатор медицинского случая */
      treatmentCaseId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/main-prescription-list';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Детальная информация о назначении процедуры
   */
  static prescriptionProcedureDetailed(
    params: {
      /** Ссылка на назначение */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionProcedureDetailed_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescription-procedures/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Обновление параметров процедуры
   */
  static updatePrescriptionProcedure(
    params: {
      /** Ссылка на назначение */
      id: number;
      /** requestBody */
      body?: UpdatePrescriptionProcedure_PrescriptionProcedureUpdateModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdatedPrescriptionProcedureModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescription-procedures/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Детальная информация о назначении медикамента
   */
  static prescriptionMedicineDetailed(
    params: {
      /** Ссылка на назначение */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionMedicineDetailed_EditableModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescription-medicines/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Обновление параметров назначения медикамента
   */
  static updateMedicine(
    params: {
      /** Идентификатор назначения */
      id: number;
      /** requestBody */
      body?: PrescriptionMedicineUpdateModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdatedPrescriptionMedicineModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescription-medicines/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Способы приема медикаментов
   */
  static getList(
    params: {
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchMedicineIntakeMethods_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/medicine-intake-methods';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Утверждение назначений
   */
  static approvePrescriptions(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescriptions/approve';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Отклонение назначений
   */
  static rejectPrescriptions(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescriptions/reject';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Остановка назначений
   */
  static suspendPrescriptions(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescriptions/suspend';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Отмена назначений
   */
  static cancelPrescriptions(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescriptions/cancel';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Возобновление назначений
   */
  static resumePrescriptions(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescriptions/resume';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Создание назначений медикаментов
   */
  static createMedicine(
    params: {
      /** Идентификатор лечебного случая */
      treatmentCaseId: number;
      /** requestBody */
      body?: CreatePrescriptionMedicine_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_PrescriptionMedicineModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/prescription-medicines';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
 * Создание назначений консультативных приёмов, процедур
Назначение может создаваться 3 способами:
1. из листа назначений - для этого достаточно передать только id услуг и id лечебного случая
2. из консультативного приёма - для этого требуется дополнительно указать OwnerAppointmentId - идентификатор самого приёма
3. из лечебной программы - когда способ оплаты устанавливается как из программы с сылкой на эту программу. Требуется заполнить TreatmentCaseTreatmentProgramId
 */
  static createPrescriptions(
    params: {
      /** Идентификатор лечебного случая */
      treatmentCaseId: number;
      /** requestBody */
      body?: CreatePrescriptions_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/prescriptions';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Вывод назначений из состояния черновика
   */
  static markAsReady(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescriptions/mark-as-ready';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Вычисление количества процедуры на весь срок по её параметрам
   */
  static calculateProcedureQuantity(
    params: {
      /**  */
      id: number;
      /** Начальная дата отпуска */
      startDate?: string;
      /** Идентификатор кратности отпуска процедуры */
      procedureRepetitionTypeId?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescription-procedures/{id}/calculate-quantity';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        StartDate: params['startDate'],
        ProcedureRepetitionTypeId: params['procedureRepetitionTypeId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Установка/снятие Cito статуса у назначения
   */
  static setCito(
    params: {
      /** requestBody */
      body?: SetCito_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescriptions/set-cito';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Установка способа оплаты у назначения
   */
  static setFundingSource(
    params: {
      /** Идентификатор назначения */
      id: number;
      /** requestBody */
      body?: SetFundingSource_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/prescriptions/{id}/set-funding-source';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение услуг для назначения в виде дерева
   */
  static searchServiceItemForPrescribeTree(
    params: {
      /**  */
      treatmentCaseId: number;
      /**  */
      treatmentCaseId?: number;
      /** Типы услуг */
      types?: ServiceItemType[];
      /** Исключить состав лаб исследований */
      excludeChildrenOfComposite?: boolean;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /** Родительский элемент */
      parentId?: number;
      /** Исключить узлы без элементов */
      excludeEmptyRoots?: boolean;
      /** Исключить главный узел */
      excludeMainRoot?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_TreeSearchServiceItems_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/service-items-for-prescribe';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        TreatmentCaseId: params['treatmentCaseId'],
        Types: params['types'],
        ExcludeChildrenOfComposite: params['excludeChildrenOfComposite'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        ParentId: params['parentId'],
        ExcludeEmptyRoots: params['excludeEmptyRoots'],
        ExcludeMainRoot: params['excludeMainRoot'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class RegistrationService {
  /**
   * Поиск ИБ (заездов)
   */
  static searchRegistration(
    params: {
      /** Ссылка на объект/санаторий */
      facilityId?: number;
      /** Номер ИБ */
      recordNo?: string;
      /** Искать среди закрытых */
      includeClosedMedicalRecords?: boolean;
      /** Дата приезда */
      arrivalDateFrom?: string;
      /** Дата выезда */
      arrivalDateTo?: string;
      /** Дата выезда с */
      departureDateFrom?: string;
      /** Дата выезда по */
      departureDateTo?: string;
      /** Тип ИБ */
      medicalRecordType?: MedicalRecordType;
      /** Лечащие врачи */
      doctorEmployeeIds?: any | null[];
      /** Санаторные или лечебные программы */
      programIds?: any | null[];
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchRegistrationInfo_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/register-office/treatment-cases';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        FacilityId: params['facilityId'],
        RecordNo: params['recordNo'],
        IncludeClosedMedicalRecords: params['includeClosedMedicalRecords'],
        ArrivalDateFrom: params['arrivalDateFrom'],
        ArrivalDateTo: params['arrivalDateTo'],
        DepartureDateFrom: params['departureDateFrom'],
        DepartureDateTo: params['departureDateTo'],
        MedicalRecordType: params['medicalRecordType'],
        DoctorEmployeeIds: params['doctorEmployeeIds'],
        ProgramIds: params['programIds'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Запрос на получение пустой титульной страницы для создания лечебного случая
   */
  static getTitlePage(options: IRequestOptions = {}): Promise<GetTitlePage_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/register-office/treatment-cases/new';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
 * Возвращает модель на обновление титульной страницы с данными из профиля, если они не были заполнены в модели
В модели должен быть указан идентификатор профиля
 */
  static getTitlePageWithPatientProfile(
    params: {
      /** requestBody */
      body?: GetTitlePageWithPatientProfile_Query;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetTitlePage_PatientModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/register-office/treatment-cases/apply-profile';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Вычисление длительности лечебного случая по заданным параметрам
   */
  static getTreatmentDuration(
    params: {
      /** Дата начала лечения */
      startDate?: string;
      /** Дата окончания лечения */
      endDate?: string;
      /** Схема вычисления дней лечения
По дням: дата окончания - дата начала + 1
По ночам: дата окончания - дата начала
Если не задано - используется ночная схема */
      schema?: TreatmentDurationSchema;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/register-office/treatment-cases/get-duration';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { StartDate: params['startDate'], EndDate: params['endDate'], Schema: params['schema'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на установку статуса 'выехал'
   */
  static setCheckOut(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/register-office/treatment-cases/{id}/set-check-out';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск профилей ИБ
   */
  static searchProfiles(
    params: {
      /** Фамилия */
      lastName?: string;
      /** Имя */
      firstName?: string;
      /** Отчество */
      middleName?: string;
      /** Дата рождения */
      birthDate?: string;
      /** Пол */
      sex?: Sex;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchPatientProfiles_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/register-office/treatment-cases/profiles';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        LastName: params['lastName'],
        FirstName: params['firstName'],
        MiddleName: params['middleName'],
        BirthDate: params['birthDate'],
        Sex: params['sex'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class ReleaseControlProcedureService {
  /**
   * Поиск кабинетов, в которых имеются диспетчеризованные назначения
   */
  static servicePoints(
    params: {
      /** Дата, на которую идет поиск диспетчеризаций */
      dispatchingDate?: string;
      /** Часть ФИО или комнаты пациента */
      searchQuery?: string;
      /** Объект, в котором находится кабинет */
      facilityId?: number;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_ServicePointModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/procedures/service-points';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        DispatchingDate: params['dispatchingDate'],
        SearchQuery: params['searchQuery'],
        FacilityId: params['facilityId'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск назначенных процедур с информацией о диспетчеризации и пациенте
   */
  static searchReleaseControlProcedure(
    params: {
      /** Дата, на которую идет поиск диспетчеризаций. В случае поиска недиспетчеризованных назначений может не указываться */
      dispatchingDate?: string;
      /** Кабинет, в который диспетчеризована процедура. В случае поиска недиспетчеризованных назначений может не указываться */
      servicePointId?: number;
      /** Если true, то ведется поиск недиспетчеризованных назначений, а не диспетчеризаций кабинета */
      undispatchedPrescriptionSearch?: boolean;
      /** Выбираются назначения, созданные после этой даты */
      afterPrescriptionCreatedDate?: string;
      /** Объект, к которому привязан пользователь */
      facilityId?: number;
      /** Часть ФИО или комнаты пациента */
      searchQuery?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchProcedures_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/procedures/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        DispatchingDate: params['dispatchingDate'],
        ServicePointId: params['servicePointId'],
        UndispatchedPrescriptionSearch: params['undispatchedPrescriptionSearch'],
        AfterPrescriptionCreatedDate: params['afterPrescriptionCreatedDate'],
        FacilityId: params['facilityId'],
        SearchQuery: params['searchQuery'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение детальной информации о назначении или группе назначений
   */
  static getReleaseControlProcedure(
    params: {
      /** Идентификаторы диспетчеризаций */
      scheduleItemIds?: any | null[];
      /** Идентификаторы назначений */
      prescriptionIds?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetProcedurePrescription_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/procedures/detailed';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { ScheduleItemIds: params['scheduleItemIds'], PrescriptionIds: params['prescriptionIds'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Отпуск процедуры
   */
  static release(
    params: {
      /** requestBody */
      body?: ProcedureRelease_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetProcedurePrescription_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/procedures';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Помечает запланированный отпуск услуги как "не явился на приём"
   */
  static setMissed(
    params: {
      /** requestBody */
      body?: SetMissed_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetProcedurePrescription_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/procedures/set-missed';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление отпуска услуги
   */
  static cancelRelease(
    params: {
      /** requestBody */
      body?: CancelProcedureRelease_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/procedures/appointments';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение информации, необходимой для отпуска процедуры или группы процедур
   */
  static getReleaseInfo(
    params: {
      /** Идентификаторы назначений */
      prescriptionIds?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ReleaseInfoModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/procedures/release-info';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { PrescriptionIds: params['prescriptionIds'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск причин отмены отпуска процедуры
   */
  static searchCancellationReasons(
    params: {
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_DictionaryModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/procedures/cancellation-reasons';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class ReleaseMedicinesService {
  /**
   * Поиск назначенных медикаментов с информацией о пациенте
   */
  static searchReleaseMedicines(
    params: {
      /** Дата отпуска */
      date?: string;
      /** Склад медикаментов */
      warehouseId?: number;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchPrescriptionMedicinesForRelease_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/medicines';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Date: params['date'],
        WarehouseId: params['warehouseId'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Отпуск/простановка неявки у процедуры
   */
  static release(
    params: {
      /** requestBody */
      body?: MedicineRelease_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/medicines';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение детальной информации об назначении медикамента
   */
  static getReleaseMedicines(
    params: {
      /** Идентификатор назначения */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionMedicineDetailed_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/medicines/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск сотрудников для отпуска
   */
  static searchReleaseMedicines1(
    params: {
      /**  */
      request?: GetMedicineReleasers_Query;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmployeeModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/release-control/medicines/release-employees';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { request: params['request'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class ReportsService {
  /**
   *
   */
  static buildReport(
    params: {
      /**  */
      token: string;
      /**  */
      download?: boolean;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/reports/build';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { token: params['token'], download: params['download'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static searchReports(
    params: {
      /**  */
      query?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ReportCategoryModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/reports';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { Query: params['query'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class ReusableTextsService {
  /**
   * Поиск текстовых шаблонов
   */
  static searchReusableTexts(
    params: {
      /** Имя поля */
      fieldName?: string;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchReusableText_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/personnel/reusable-texts';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        FieldName: params['fieldName'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на создание текстового шаблона
   */
  static createReusableText(
    params: {
      /** requestBody */
      body?: CreateUpdateReusableText_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchReusableText_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/personnel/reusable-texts';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Удаление текстовых шаблонов
   */
  static deleteReusableTexts(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/personnel/reusable-texts';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Команда на обновление текстового шаблона
   */
  static setReusableText(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: CreateUpdateReusableText_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchReusableText_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/personnel/reusable-texts/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Увеличение частоты использования текстового шаблона
   */
  static increaseUsageCounter(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/personnel/reusable-texts/{id}/increase-usage-counter';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class RolesService {
  /**
   *
   */
  static getRoles(
    params: {
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchRoles_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/identity/roles';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createRoles(
    params: {
      /** requestBody */
      body?: SetRole_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/identity/roles';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateRoles(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: SetRole_Model;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/identity/roles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static deleteRoles(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/identity/roles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class RoomsService {
  /**
   * Поиск комнат
   */
  static searchRooms(
    params: {
      /** Ссылка на объект/санаторий */
      facilityId?: number;
      /** Тип комнаты */
      roomTypeId?: number;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchRooms_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/facilities/rooms';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        FacilityId: params['facilityId'],
        RoomTypeId: params['roomTypeId'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class ServiceItemsService {
  /**
   * Поиск услуг с результатом в виде дерева
   */
  static searchServiceItems(
    params: {
      /** Типы услуг. Если не задано, то все */
      types?: ServiceItemType[];
      /** Идентификаторы услуг */
      serviceItemIds?: any | null[];
      /** Идентификаторы услуг */
      excludedServiceItemIds?: any | null[];
      /** Фильтровать по наличию права у пользователя */
      permission?: ServiceItemPermissionMask;
      /** Только диспетчеризируемые услуги */
      isDispatchable?: boolean;
      /** Убрать состав для составных исследований */
      excludeCompositeElements?: boolean;
      /** Убрать базовый состав для составных исследований */
      excludeBasicCompositeElements?: boolean;
      /** Искать только в детях данного узла */
      parentItemId?: number;
      /** Включать ли дочерние поддеревья в результаты поиска */
      includeChildren?: boolean;
      /** Включать только активные элементы */
      onlyActive?: boolean;
      /** Поисковая строка */
      query?: string;
      /** Лимит */
      limit?: number;
      /** Скрывать ли одиночный рутовый элемент */
      hideSingleRoot?: boolean;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServiceItemModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/services/service-items';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Types: params['types'],
        ServiceItemIds: params['serviceItemIds'],
        ExcludedServiceItemIds: params['excludedServiceItemIds'],
        Permission: params['permission'],
        IsDispatchable: params['isDispatchable'],
        ExcludeCompositeElements: params['excludeCompositeElements'],
        ExcludeBasicCompositeElements: params['excludeBasicCompositeElements'],
        ParentItemId: params['parentItemId'],
        IncludeChildren: params['includeChildren'],
        OnlyActive: params['onlyActive'],
        Query: params['query'],
        Limit: params['limit'],
        HideSingleRoot: params['hideSingleRoot'],
        IncludeDeleted: params['includeDeleted']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск услуг с результатом в виде дерева
   */
  static searchServiceItemsNew(
    params: {
      /** Типы услуг */
      types?: ServiceItemType[];
      /** Исключить состав лаб исследований */
      excludeChildrenOfComposite?: boolean;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /** Родительский элемент */
      parentId?: number;
      /** Исключить узлы без элементов */
      excludeEmptyRoots?: boolean;
      /** Исключить главный узел */
      excludeMainRoot?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServiceItemModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/services/search-service-items';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Types: params['types'],
        ExcludeChildrenOfComposite: params['excludeChildrenOfComposite'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        ParentId: params['parentId'],
        ExcludeEmptyRoots: params['excludeEmptyRoots'],
        ExcludeMainRoot: params['excludeMainRoot'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Кратности процедуры
   */
  static getList(
    params: {
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchProcedureRepetitionTypes_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/services/procedures/repetition-types';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение лечебных действий для услуги с результатом в виде дерева
   */
  static searchServiceItemTreatmentActions(
    params: {
      /** Услуга, с которой ассоцированы лечебные действия */
      serviceItemId?: number;
      /** Идентификаторы услуг */
      excludedServiceItemIds?: any | null[];
      /** Искать только в детях данного узла */
      parentItemId?: number;
      /** Включать ли дочерние поддеревья в результаты поиска */
      includeChildren?: boolean;
      /** Включать только активные элементы */
      onlyActive?: boolean;
      /** Поисковая строка */
      query?: string;
      /** Лимит */
      limit?: number;
      /** Скрывать ли одиночный рутовый элемент */
      hideSingleRoot?: boolean;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServiceItemModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/services/service-items/treatment-actions';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        ServiceItemId: params['serviceItemId'],
        ExcludedServiceItemIds: params['excludedServiceItemIds'],
        ParentItemId: params['parentItemId'],
        IncludeChildren: params['includeChildren'],
        OnlyActive: params['onlyActive'],
        Query: params['query'],
        Limit: params['limit'],
        HideSingleRoot: params['hideSingleRoot'],
        IncludeDeleted: params['includeDeleted']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Получение схемы применения
   */
  static getBodySchema(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetBodySchema_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/services/body-shemas/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class ServicePointsService {
  /**
   * Поиск кабинетов с результатом в виде дерева
   */
  static searchServicePoints(
    params: {
      /** Искать только по кабинетам, к которым у пользователя есть доступ */
      myServicePoints?: boolean;
      /** Искать только в детях данного узла */
      parentItemId?: number;
      /** Включать ли дочерние поддеревья в результаты поиска */
      includeChildren?: boolean;
      /** Включать только активные элементы */
      onlyActive?: boolean;
      /** Поисковая строка */
      query?: string;
      /** Лимит */
      limit?: number;
      /** Скрывать ли одиночный рутовый элемент */
      hideSingleRoot?: boolean;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchMyServicePoints_Model[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/facilities/service-points';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        MyServicePoints: params['myServicePoints'],
        ParentItemId: params['parentItemId'],
        IncludeChildren: params['includeChildren'],
        OnlyActive: params['onlyActive'],
        Query: params['query'],
        Limit: params['limit'],
        HideSingleRoot: params['hideSingleRoot'],
        IncludeDeleted: params['includeDeleted']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class SignatureService {
  /**
   * Добавление подписи к файлу
   */
  static attachSignatureToFile(
    params: {
      /** requestBody */
      body?: AttachSignatureToFile_Command;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/signature';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class SocialStatusesService {
  /**
   * Поиск социальных положений
   */
  static searchSocialStatuses(
    params: {
      /** Включать неактивные и удаленные */
      includeNotActive?: boolean;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchSocialStatuses_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/profiles/social-statuses';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeNotActive: params['includeNotActive'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class SystemInfoService {
  /**
   *
   */
  static version(options: IRequestOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/system-info/version';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static configuration(options: IRequestOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/system-info/configuration';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class TagsService {
  /**
   * Поиск тэгов
   */
  static searchTags(
    params: {
      /** Фильтрация тегов по выбранным правам
Права на добавление/удаление заканчиваются на Tags.Edit
Если не задано - выводит все */
      permissions?: any | null[];
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_TagDefinitionModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/tags';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Permissions: params['permissions'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class TreatmentIndicationsService {
  /**
   * Список показанности к лечению
   */
  static getList(
    params: {
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentIndications_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-indications';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class TreatmentModesService {
  /**
   * Список режимов лечения
   */
  static getList(
    params: {
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentModes_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-modes';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class TreatmentProgramsService {
  /**
   * Создание лечебных программ
   */
  static start(
    params: {
      /** Ссылка на лечебное действие */
      treatmentCaseId: number;
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPrescriptionList_TreatmentCaseTreatmentProgramModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/treatment-programs';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск услуг (в виде дерева) которые можно назначить для лечебных программ лечебного случая
   */
  static searchServiceItems(
    params: {
      /** Ссылка на лечебный случай */
      treatmentCaseId?: number;
      /**  */
      treatmentCaseId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchTreatmentCaseProgramServiceItems_Model[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/medical-records/treatment-cases/{treatmentCaseId}/treatment-programs-service-items';
      url = url.replace('{treatmentCaseId}', params['treatmentCaseId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { TreatmentCaseId: params['treatmentCaseId'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Поиск программ
   */
  static searchTreatmentPrograms(
    params: {
      /** Тип программы лечения */
      treatmentProgramType?: TreatmentProgramType;
      /** Включать ли удаленные элементы */
      includeDeleted?: boolean;
      /** Включать ли неактивные элементы. По-умолчанию true */
      includeNonActive?: boolean;
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_SearchTreatmentPrograms_Model> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/services/treatment-programs';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        TreatmentProgramType: params['treatmentProgramType'],
        IncludeDeleted: params['includeDeleted'],
        IncludeNonActive: params['includeNonActive'],
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class WarehousesService {
  /**
   * Поиск складов медикаментов
   */
  static searchWarehouses(
    params: {
      /**  */
      query?: string;
      /**  */
      ids?: any | null[];
      /**  */
      excludeIds?: any | null[];
      /**  */
      sortByIds?: any | null[];
      /**  */
      orderBy?: any | null[];
      /**  */
      offset?: number;
      /**  */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PagedResponse_WarehouseModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/warehouses';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Query: params['query'],
        Ids: params['ids'],
        ExcludeIds: params['excludeIds'],
        SortByIds: params['sortByIds'],
        OrderBy: params['orderBy'],
        Offset: params['offset'],
        Limit: params['limit']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export interface AccountCommands {
  /**  */
  canAddInvoice?: CommandInfoModel;

  /**  */
  canMakeDeposit?: CommandInfoModel;
}

export interface AccountInfoModel {
  /** Идентификатор */
  id?: number;

  /**  */
  status?: AccountStatus;

  /** Наименование */
  name?: string;

  /** Наименование комнаты, места пребывания плательщика */
  location?: string;

  /**  */
  balance?: BalanceModel;

  /** Дата начала пребывания */
  startDate?: Date;

  /** Дата окончания пребывания */
  endDate?: Date;
}

export interface AccountModel {
  /** Идентификатор */
  id?: number;

  /**  */
  status?: AccountStatus;

  /** Наименование */
  name?: string;

  /** Наименование комнаты, места пребывания плательщика */
  location?: string;

  /** Дата начала пребывания */
  startDate?: Date;

  /** Дата окончания пребывания */
  endDate?: Date;

  /**  */
  payerInfo?: PayerInfo;

  /**  */
  balance?: BalanceModel;

  /** Карманы */
  subAccounts?: SubAccountModel[];

  /**  */
  commands?: AccountCommands;
}

export interface AddMedicalExaminationRadiationImpact_Command {
  /** Идентификаторы типов радиационного воздействия */
  imageRadiationImpactIds?: number[];

  /** Идентификатор приема */
  medicalExaminationId?: number;
}

export interface AddMedicalExaminationTreatmentAction_Command {
  /**  */
  medicalExaminationId?: number;

  /**  */
  treatmentActionIds?: number[];
}

export interface AppointmentDetailedModel {
  /**  */
  id?: number;

  /**  */
  status?: AppointmentStatus;

  /** Дата отпуска */
  dateComplete?: Date;

  /** Дата создания */
  dateCreated?: Date;

  /** Ссылка на диспетчеризацию */
  scheduleItemId?: number;

  /** Отпущенные лечебные действия */
  treatmentActions?: AppointmentTreatmentActionModel[];

  /** Отпускающие сотрудники */
  releaseExecutionTeam?: AppointmentTeamMemberModel[];

  /**  */
  createdUserName?: PersonNameModel;
}

export interface AppointmentModel {
  /**  */
  id?: number;

  /**  */
  status?: AppointmentStatus;

  /** Дата отпуска */
  dateComplete?: Date;

  /** Дата создания */
  dateCreated?: Date;

  /** Ссылка на диспетчеризацию */
  scheduleItemId?: number;
}

export interface AppointmentProbeModel {
  /** Дата взятия биоматериала */
  dateCreated?: Date;

  /** Дата готовности результата */
  dateComplete?: Date;
}

export interface AppointmentTeamMemberModel {
  /**  */
  serviceExecutionTeamMember?: ServiceExecutionTeamMemberModel;

  /**  */
  employee?: EmployeeModel;
}

export interface AppointmentTreatmentActionModel {
  /** Название лечебного действия */
  serviceItemName?: string;

  /** Количество */
  quantity?: number;

  /** Стоимость с учетом скидки */
  totalPrice?: number;
}

export interface AttachSignatureToFile_Command {
  /** Подписываемый файл */
  attachmentKey?: string;

  /** Значение открепленной подписи в формате base64 */
  signatureValue?: string;
}

export interface AttrsNode {
  /**  */
  colspan?: string;
}

export interface BalanceModel {
  /** Общая сумма начислений по всем карманам */
  totalRevenueAmount?: number;

  /** Общая сумма платежей по всем карманам */
  totalPaymentAmount?: number;

  /** Суммарный баланс */
  balance?: number;
}

export interface CancelInvoiceByGroupedTransactions_CancelTransactionGroupModel {
  /** Идентификатор транзакции, представляющей группу */
  sampleTransactionId?: number;

  /** Количество транзакций из группы, которые пойдут на отмену */
  quantity?: number;
}

export interface CancelInvoiceByGroupedTransactions_Command {
  /** Идентификатор отменяемого счета */
  invoiceId?: number;

  /** Транзакции, которые будут отменены в счете */
  transactionGroups?: CancelInvoiceByGroupedTransactions_CancelTransactionGroupModel[];

  /** Комментарий к отмене */
  comment?: string;
}

export interface CancelProcedureRelease_Command {
  /** Идентификатор отпущенной услуги */
  appointmentIds?: number[];

  /** Причина отмены */
  cancellationReasonId?: number;

  /** Комментарий при отмене */
  cancellationComment?: string;
}

export interface CashFiscalModel {
  /** Сумма ко внесению, руб */
  amount?: number;
}

export interface ChangePassword_Command {
  /**  */
  oldPassword?: string;

  /**  */
  newPassword?: string;
}

export interface ClassesNode {
  /**  */
  wrapper?: string;
}

export interface ClerkInfo {
  /**  */
  fullName?: string;

  /**  */
  inn?: string;
}

export interface CloseTreatmentCases_Command {
  /**  */
  treatmentCaseIds?: number[];
}

export interface CommandInfoModel {
  /**  */
  canExecute?: boolean;

  /**  */
  canView?: boolean;

  /**  */
  unavailabilityReasons?: string[];
}

export interface CommandedArray_GetTitlePage_DiagnosisDetailedModel {
  /**  */
  canAddCommand?: CommandInfoModel;

  /**  */
  results?: GetTitlePage_DiagnosisDetailedModel[];
}

export interface CommandedArray_SearchTreatmentCaseDiets_Model {
  /**  */
  canAddCommand?: CommandInfoModel;

  /**  */
  results?: SearchTreatmentCaseDiets_Model[];
}

export interface CommandedArray_SearchTreatmentCaseNutritionExtras_Model {
  /**  */
  canAddCommand?: CommandInfoModel;

  /**  */
  results?: SearchTreatmentCaseNutritionExtras_Model[];
}

export interface CountryModel {
  /**  */
  id?: number;

  /**  */
  name?: string;
}

export interface CreateDiagnosis_CreateModel {
  /** Диагнозы */
  diagnoses?: CreateDiagnosis_DiagnosisModel[];

  /** Услуги для назначения */
  serviceItemsForPrescription?: number[];
}

export interface CreateDiagnosis_DiagnosisModel {
  /** Ссылка на МКБ */
  icdItemId?: number;

  /** Описание диагноза */
  clinicalDiagnosis?: string;

  /** Впервые выявлен */
  isFirstTime?: boolean;
}

export interface CreateFiscalCheckForTransactions_Command {
  /** Идентификаторы транзакций, на основе которых формируется чек */
  transactionIds?: number[];

  /** Адрес станции */
  workstationAddress?: string;

  /**  */
  payerParameters?: PayerParameters;
}

export interface CreateInvoiceByGroupedTransactions_Command {
  /** Номер нового счета. Если не указано - то устанавливается в формате "ID аккаунта"\/"ID счета" */
  invoiceNo?: string;

  /** Комментарий к новому счету */
  comment?: string;

  /** Группы транзакций и количество для включения в счет */
  transactionGroups?: CreateInvoiceByGroupedTransactions_TransactionGroupCreateModel[];
}

export interface CreateInvoiceByGroupedTransactions_TransactionGroupCreateModel {
  /** Идентификатор транзакции, представляющей группу */
  sampleTransactionId?: number;

  /** Количество транзакций из группы, которые пойдут в новый счет */
  quantity?: number;
}

export interface CreateMeasurementSheet_Model {
  /** Идентификатор типа измерения */
  measurementTypeId?: number;
}

export interface CreatePrescriptionMedicine_Command {
  /** Медикаменты */
  medicines?: CreatePrescriptionMedicine_MedicineModel[];

  /**  */
  medicine?: CreatePrescriptionMedicine_MedicineCreateModel;

  /** Ссылка на лечебный случай */
  treatmentCaseId?: number;

  /** Ссылка на прием, если добавляется в его рамках */
  ownerAppointmentId?: number;
}

export interface CreatePrescriptionMedicine_MedicineCreateModel {
  /** Коммерческое название */
  tradeName?: string;

  /** Латинское название */
  latinName?: string;
}

export interface CreatePrescriptionMedicine_MedicineModel {
  /** Идентификатор медикамента */
  id?: number;

  /** Склад, с которого планируется отпускать медикамент */
  warehouseId?: number;
}

export interface CreatePrescriptions_Command {
  /** Идентификатор лечебного случая */
  treatmentCaseId?: number;

  /** Идентификаторы услуг с параметрами для создания назначения */
  prescriptions?: CreatePrescriptions_CreatePrescriptionsModel[];

  /** Идентификатор отпуска, из которого создаётся назначение */
  ownerAppointmentId?: number;

  /** Автоматическое назначение */
  autoPrescribe?: boolean;

  /** Комментарий */
  comment?: string;
}

export interface CreatePrescriptions_CreatePrescriptionsModel {
  /** Идентификаторы услуг */
  serviceItemIds?: number[];

  /** Идентификатор лечебной программы */
  treatmentCaseTreatmentProgramId?: number;
}

export interface CreateProbeOrder_Command {
  /** Пробирки */
  probeTubes?: CreateProbeOrder_ProbeTubeModel[];

  /** Комментарий к заказу */
  comment?: string;
}

export interface CreateProbeOrder_ProbeTubeModel {
  /** Идентификатор биоматериала */
  biomaterialTypeId?: number;

  /** Идентификатор контейнера */
  biomaterialContainerId?: number;

  /** Штрих код пробирки */
  tubeNumber?: string;

  /** Кол-во биоматериала, нужное для исследования */
  quantity?: number;

  /** Назначения, к которым относится пробирка */
  prescriptionIds?: number[];
}

export interface CreateUpdateField_Model {
  /** Ссылка на группу полей формы */
  formGroupId?: number;

  /** Название поля */
  name?: string;

  /** Описание (подсказка) к заполнению */
  description?: string;

  /**  */
  type?: FieldType;

  /** Порядок сортировки */
  sortOrder?: number;

  /** Списочные значения */
  listItemValues?: ListItemValueDetailedModel[];

  /**  */
  id?: number;

  /**  */
  dateDeleted?: Date;
}

export interface CreateUpdateForm_Model {
  /** Название формы */
  name?: string;

  /** Область применения формы в json формате
Формат записи: {"Код_системы":["Область_использования"]} */
  formType?: string;
}

export interface CreateUpdateFormGroup_Model {
  /**  */
  id?: number;

  /** Ссылка на форму */
  formId?: number;

  /** Наименование группы */
  name?: string;

  /** Порядок сортировки */
  sortOrder?: number;

  /** Список ролей, которым доступен просмотр */
  viewRoles?: string[];

  /** Список ролей, которым доступно редактирование */
  editRoles?: string[];

  /**  */
  dateDeleted?: Date;
}

export interface CreateUpdateMeasurementSheetRecord_MeasurementValueCreateUpdateModel {
  /** Идентификатор значения измерения. null - создается новое */
  id?: number;

  /** Тип измерения */
  measurementValueTypeId?: number;

  /** Значение */
  value?: number;
}

export interface CreateUpdateMeasurementSheetRecord_Model {
  /** Идентификатор листа измерения */
  measurementSheetId?: number;

  /** Дата создания измерения. null - текущая */
  dateCreated?: Date;

  /** Время создания измерения. null - текущая */
  timeCreated?: string;

  /** Значения измерения, которые будут созданы или изменены */
  recordValues?: CreateUpdateMeasurementSheetRecord_MeasurementValueCreateUpdateModel[];
}

export interface CreateUpdateMedicine_Model {
  /** Коммерческое название */
  name?: string;

  /** Латинское название */
  latinName?: string;
}

export interface CreateUpdateNutritionExtra_Model {
  /**  */
  startDate?: Date;

  /**  */
  endDate?: Date;

  /**  */
  exemptionType?: NutritionExemptionType;

  /**  */
  nutritionText?: string;
}

export interface CreateUpdateReusableText_Model {
  /** Имя поля */
  fieldName?: string;

  /** Текст */
  text?: string;
}

export interface CreateUpdateTreatmentCaseDiet_Model {
  /**  */
  dietId: number;

  /**  */
  startDate: Date;

  /**  */
  endDate?: Date;
}

export interface CreateUpdateTreatmentProgram_TreatmentCaseTreatmentProgramModel {
  /** Идентификатор. null - если нужно создать */
  id?: number;

  /** Идентификатор лечебной программы */
  treatmentProgramId?: number;

  /** Дата начала лечебной программы. Можно не задавать для новой программы, тогда началом будет начало лечения или сегодняшняя дата */
  startDate?: Date;
}

export interface DictionaryModel {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;
}

export interface DispatchConflict {
  /** Дата действия конфликта */
  date?: Date;

  /** Время начала действия конфликта */
  startTime?: string;

  /** Время окончания действия конфликта */
  endTime?: string;

  /** Описание конфликта */
  description?: string;

  /**  */
  conflictSeverity?: ConflictSeverity;

  /** Может ли быть игнорировано текущим пользователем */
  canBeIgnored?: boolean;
}

export interface DispatchPrescription_Command {
  /** Дата диспетчеризации */
  date?: Date;

  /** Время с которого начать отпуск услуги */
  startTime?: string;

  /** Количество для диспетчеризации (1, если не задано, N - для процедур) */
  quantity?: number;

  /** Идентификатор кабинета */
  servicePointId?: number;

  /** Идентификатор назначения */
  prescriptionId?: number;

  /** Длительность диспетчеризации. Если у услуги и назначения не задана длительность, то значение будет браться из этого поля */
  duration?: number;

  /** Даты диспетчеризации со списком игнорируемых конфликтов
Если пусто, то диспетчеризация осуществляется на выбранную дату */
  dates?: DispatchPrescription_DispatchOnDateModel[];

  /**  */
  source?: ScheduleItemSource;
}

export interface DispatchPrescription_DispatchOnDateModel {
  /** Дата */
  date?: Date;

  /** Хэш конфликтов, которые следует проигнорировать
(сработает только для тех конфликтов, которые специалист имеет право игнорировать) */
  ignoreConflicts?: number[];
}

export interface DocumentTypeModel {
  /**  */
  id?: number;

  /**  */
  name?: string;
}

export interface DraftScheduleItemConflictModel {
  /** Хэш конфликта
Используется для идентификации
Строится по описанию конфликта и даты диспетчеризации */
  hash?: number;

  /** Описание конфликта */
  description?: string;

  /** Может ли быть игнорировано текущим пользователем */
  canBeIgnored?: boolean;
}

export interface DraftScheduleItemModel {
  /** Дата */
  date?: Date;

  /** Время начала */
  startTime?: string;

  /** Конфликты диспетчеризации */
  conflicts?: DraftScheduleItemConflictModel[];
}

export interface EmployeeModel {
  /** Идентификатор */
  id?: number;

  /**  */
  fullName?: PersonNameModel;
}

export interface EmployeeReleaseModel {
  /** Идентификатор */
  id?: number;

  /**  */
  fullName?: PersonNameModel;

  /** Доступные для отпуска кабинеты */
  availableServicePoints?: number[];

  /** Отпускающий специалист по умолчанию, которого следует автоматически выбирать при выборе специалиста */
  isDefault?: boolean;

  /** Идентификатор пользователя */
  userId?: number;
}

export interface FieldDetailedModel {
  /** Ссылка на группу полей формы */
  formGroupId?: number;

  /** Название поля */
  name?: string;

  /** Описание (подсказка) к заполнению */
  description?: string;

  /**  */
  type?: FieldType;

  /** Порядок сортировки */
  sortOrder?: number;

  /** Списочные значения */
  listItemValues?: ListItemValueDetailedModel[];

  /**  */
  id?: number;
}

export interface FieldModel {
  /** Идентификатор Sanatorium.DataAccess.Models.Forms.Field */
  id?: number;

  /** Название поля */
  name?: string;

  /**  */
  type?: FieldType;

  /**  */
  value?: FieldValueModel;

  /** Список возможных значений для списковых типов полей (списков и тегов) */
  availableValues?: ListItemValueModel[];

  /** Описание значения поля или правил его заполнения */
  description?: string;

  /** Порядок сортировки */
  sortOrder?: number;

  /** Идентификатор группы */
  formGroupId?: number;

  /**  */
  dateDeleted?: Date;
}

export interface FieldValueModel {
  /** Идентификатор Sanatorium.DataAccess.Models.Forms.FieldValue */
  id?: number;

  /** Идентификатор сущности, к которой принадлежит значение поля */
  ownerId?: string;

  /** Строковое представление значения поля */
  valueString?: string;

  /** Булево значение (для булевых полей) */
  valueBool?: boolean;

  /** Числовое значение (для чисел) */
  valueNumeric?: number;

  /** Значения даты и времени */
  valueDateTime?: Date;

  /** Дата, когда значение поля потеряло свою актуальность (было изменено) */
  dateDeleted?: Date;

  /** Дата, когда значение поле заменило собой предыдущее значение */
  dateUpdated?: Date;

  /**  */
  userFullName?: PersonNameModel;

  /** Список значений для списковых типов полей (списков и тегов) */
  listValues?: ListItemValueModel[];
}

export interface FieldValueSetModel {
  /**  */
  fieldId?: number;

  /**  */
  valueString?: string;

  /**  */
  valueBool?: boolean;

  /**  */
  valueNumeric?: number;

  /**  */
  valueDate?: Date;

  /**  */
  valueTime?: string;

  /**  */
  listValues?: ListItemValueSetModel[];
}

export interface FiscalDeviceStatusItem {
  /**  */
  parameter?: string;

  /**  */
  value?: string;

  /**  */
  status?: ItemStatus;
}

export interface FormGroupModel {
  /** Идентификатор Sanatorium.DataAccess.Models.Forms.FormGroup */
  id?: number;

  /** Наименование группы */
  name?: string;

  /** Разрешено ли пользователю редактировать поля группы */
  allowEdit?: boolean;

  /** Поля группы */
  fields?: FieldModel[];
}

export interface FormKitElement {
  /**  */
  $cmp?: string;

  /**  */
  props?: PropNode;

  /**  */
  children?: FormKitElement[];
}

export interface FormKitFunction {
  /**  */
  computedVariableNames?: string[];

  /**  */
  body?: string;
}

export interface FormModel {
  /** Идентификатор Sanatorium.DataAccess.Models.Forms.Form */
  id?: number;

  /** Название формы */
  name?: string;

  /** Группы формы */
  groups?: FormGroupModel[];

  /**  */
  canEdit?: CommandInfoModel;
}

export interface FundingSourceModel {
  /**  */
  id?: number;

  /** Код */
  code?: string;

  /** Название */
  name?: string;
}

export interface FundingSourceTreatmentProgramModel {
  /**  */
  id?: number;

  /** Код */
  code?: string;

  /** Название */
  name?: string;

  /** Ссылка на лечебную или санаторную программу */
  treatmentCaseTreatmentProgramId?: number;

  /** Название санаторной или лечебной программы */
  treatmentCaseTreatmentProgramName?: string;
}

export interface GetBodySchema_BodyPartModel {
  /** Идентфикатор */
  id?: number;

  /** Название */
  name?: string;

  /** Кол-во единиц */
  units?: number;

  /** Дочерние элементы */
  children?: GetBodySchema_BodyPartModel[];

  /** Связанные с частью тела изображения */
  imageItemIds?: number[];
}

export interface GetBodySchema_Model {
  /** Части тела */
  bodyParts?: GetBodySchema_BodyPartModel[];

  /**  */
  svg?: GetBodySchema_SvgNodeModel;
}

export interface GetBodySchema_SvgNodeModel {
  /** Тип узла */
  type?: string;

  /** Дочерние узлы */
  children?: GetBodySchema_SvgNodeModel[];

  /** Атрибуты */
  attributes?: object;

  /** Текст узла */
  text?: string;

  /** Связанная с узлом ссылка на изображение */
  imageItemId?: number;
}

export interface GetCashBoxAmountFiscalRequest {
  /**  */
  clerk?: ClerkInfo;
}

export interface GetCashboxAmountFiscalResponse {
  /**  */
  terminalId?: string;

  /**  */
  amount?: number;
}

export interface GetConsultationsForStart_Model {
  /** Назначения для старта */
  prescriptionsForStart?: GetConsultationsForStart_StartablePrescriptionModel[];

  /** Услуги для старта */
  serviceItemsForStart?: GetConsultationsForStart_StartableServiceItemModel[];
}

export interface GetConsultationsForStart_StartablePrescriptionModel {
  /** Ссылка на услугу */
  serviceItemId?: number;

  /** Название услуги */
  serviceItemName?: string;

  /** Повторена ли услуга */
  isRepeat?: boolean;

  /** Ссылка на назначение */
  prescriptionId?: number;

  /** Дата диспетчеризации */
  startDate?: Date;

  /** Время диспетчеризации */
  startTime?: string;

  /** Назначение не оплачено */
  isNotFreeAndUnpaid?: boolean;
}

export interface GetConsultationsForStart_StartableServiceItemModel {
  /** Ссылка на услугу */
  serviceItemId?: number;

  /** Название услуги */
  serviceItemName?: string;

  /** Повторена ли услуга */
  isRepeat?: boolean;
}

export interface GetCurrentUserInfo_Model {
  /**  */
  userId?: number;

  /**  */
  employeeId?: number;

  /**  */
  lastName?: string;

  /**  */
  firstName?: string;

  /**  */
  middleName?: string;
}

export interface GetDiagnosesForJustification_Model {
  /**  */
  id?: number;

  /** Клинический диагноз */
  clinicalDiagnosis?: string;
}

export interface GetDiagnosisById_DetailedModel {
  /** Ссылка на заезд\/лечебный случай */
  treatmentCaseId?: number;

  /** Ссылка на болезнь из МКБ */
  icdItemId?: number;

  /** Клинический диагноз */
  clinicalDiagnosis?: string;

  /** Основной диагноз */
  isMain?: boolean;

  /** Осложнение основного заболевания */
  isComplication?: boolean;

  /** Выявлен ли впервые */
  isFirstTime?: boolean;

  /** Включать в эпикриз */
  includedInEpicrisis?: boolean;
}

export interface GetEnums_EnumField {
  /**  */
  key?: string;

  /** Название элемента
            
TODO: локализовать */
  value?: string;
}

export interface GetEnums_Model {
  /**  */
  enumName?: string;

  /**  */
  values?: GetEnums_EnumField[];
}

export interface GetFacilityInfo_Model {
  /** Идентификатор */
  id?: number;

  /** Наименование */
  name?: string;

  /** Код культуры для используемой валюты */
  currencyCultureName?: string;

  /** Идентификатор страны объекта */
  countryName?: string;

  /** Код страны (двухсимвольный) */
  countryCode?: string;

  /** Телефонный код страны */
  phoneCode?: number;
}

export interface GetFiscalStatusResponse {
  /**  */
  terminalId?: string;

  /**  */
  items?: FiscalDeviceStatusItem[];
}

export interface GetFormById_DetailedModel {
  /** Название формы */
  name?: string;

  /** Область применения формы в json формате
Формат записи: {"Код_системы":["Область_использования"]} */
  formType?: string;

  /**  */
  formGroups?: GetFormGroupById_DetailedModel[];

  /**  */
  id?: number;
}

export interface GetFormGroupById_DetailedModel {
  /** Наименование группы */
  name?: string;

  /** Список ролей, которым доступен просмотр */
  viewRoles?: string[];

  /** Список ролей, которым доступно редактирование */
  editRoles?: string[];

  /** Поля группы */
  fields?: FieldDetailedModel[];

  /**  */
  id?: number;
}

export interface GetLabTestInfo_LabTestCommands {
  /**  */
  canFinish?: CommandInfoModel;

  /**  */
  canEdit?: CommandInfoModel;

  /**  */
  canSing?: CommandInfoModel;
}

export interface GetLabTestInfo_Model {
  /** Идентификатор протокола исследования */
  medicalExaminationId?: number;

  /**  */
  appointmentStatus?: AppointmentStatus;

  /** Дата взятия биоматериала */
  biomaterialTakenDate?: Date;

  /** Наименование исследования */
  name?: string;

  /**  */
  patient?: LabTestPatientModel;

  /** Отпускающие сотрудники */
  releaseExecutionTeam?: AppointmentTeamMemberModel[];

  /** Доступные отпускающие роли */
  availableExecutionTeams?: ServiceExecutionTeamMemberModel[];

  /** Доступные отпускающие специалисты */
  availableEmployeeReleasers?: EmployeeReleaseModel[];

  /** Идентификатор формы для печати протокола */
  customDocumentId?: number;

  /**  */
  commands?: GetLabTestInfo_LabTestCommands;

  /**  */
  status?: PrescriptionStatus;
}

export interface GetLabTestResult_LabTestElementGroupModel {
  /** Наименование группы */
  groupName?: string;

  /** Порядок сортировки */
  order?: number;

  /** Элементы группы */
  elements?: GetLabTestResult_LabTestElementModel[];
}

export interface GetLabTestResult_LabTestElementModel {
  /** Идентификатор */
  id?: number;

  /** Наименование */
  name?: string;

  /** Значение показателя */
  result?: string;

  /** Единица измерения */
  units?: string;

  /** Текстовое описание диапазона нормы (с учетом пола и возраста этого пациента) */
  referenceNorm?: string;

  /** Текстовое описание диапазона нормы (с учетом пола и возраста этого пациента) */
  referencePathology?: string;

  /** Индикатор патология\/нет */
  isPathology?: boolean;

  /** Комментарий */
  comment?: string;
}

export interface GetLabTestResult_Model {
  /** Идентификатор протокола исследования */
  medicalExaminationId?: number;

  /**  */
  genericResult?: GenericExaminationResult;

  /** Общее количество патологий */
  pathologyCount?: number;

  /** Количество впервые выявленных патологий */
  firstTimePathologyCount?: number;

  /** Группы показателей исследования */
  elementGroups?: GetLabTestResult_LabTestElementGroupModel[];
}

export interface GetMedicalExaminationInfo_MedicalExaminationCommands {
  /**  */
  canView?: CommandInfoModel;

  /**  */
  canEdit?: CommandInfoModel;

  /**  */
  canSetMissed?: CommandInfoModel;

  /**  */
  canFinish?: CommandInfoModel;

  /**  */
  canCancel?: CommandInfoModel;

  /**  */
  canUnblock?: CommandInfoModel;

  /**  */
  canSing?: CommandInfoModel;
}

export interface GetMedicalExaminationInfo_Model {
  /** Идентификатор */
  id?: number;

  /**  */
  status?: AppointmentStatus;

  /** Дата приема */
  examinationDateTime?: Date;

  /** Дата завершения приема */
  completionDateTime?: Date;

  /**  */
  specialistFullName?: PersonNameModel;

  /**  */
  servicePoint?: ServicePointModel;

  /** Отпускающие сотрудники */
  releaseExecutionTeam?: AppointmentTeamMemberModel[];

  /**  */
  releaseInfo?: ReleaseInfoModel;

  /**  */
  commands?: GetMedicalExaminationInfo_MedicalExaminationCommands;

  /** Есть ли лечебные действия, которые можно добавить */
  hasAvailableTreatmentActions?: boolean;

  /** Количество добавленных лечебных действий */
  treatmentActionCount?: number;

  /** Идентификатор формы для печати протокола */
  customDocumentId?: number;

  /** Есть ли лучевое воздействие
Если true - при заполнении требуется ввод данных о лучевом воздействии */
  hasRadiationImpact?: boolean;

  /** Кол-во назначений, сделанных в рамках приема */
  prescriptionCount?: number;

  /** Кол-во диагнозов, добавленных в рамках приема */
  diagnosisCount?: number;

  /** Кол-во документов, добавленных в рамках приема */
  attachmentCount?: number;

  /** Кол-во добавленных значений лучевого воздействия */
  imageRadiationImpactCount?: number;

  /** Может ли прием иметь диагнозы */
  canHaveDiagnoses?: boolean;

  /** Название назначения */
  prescriptionName?: string;
}

export interface GetMedicineReleasers_Query {}

export interface GetNotificationsCounter_NotificationGroup {
  /**  */
  severityLevel?: NotificationSeverityLevel;

  /** Кол-во */
  count?: number;
}

export interface GetPrescriptionBiomaterials_BiomaterialContainerModel {
  /** Идентификатор */
  id?: number;

  /** Название биоматериала */
  name?: string;

  /** Описание */
  description?: string;
}

export interface GetPrescriptionBiomaterials_BiomaterialModel {
  /** Идентификатор */
  id?: number;

  /** Название биоматериала */
  name?: string;

  /** Единицы измерения */
  units?: string;

  /** Обязательность выбора */
  isSelected?: boolean;

  /** Контейнеры, используемые для биоматериала */
  containers?: GetPrescriptionBiomaterials_BiomaterialContainerModel[];
}

export interface GetPrescriptionBiomaterials_BiomaterialSelection {
  /** Биоматериалы в группе */
  biomaterials?: GetPrescriptionBiomaterials_BiomaterialModel[];
}

export interface GetPrescriptionBiomaterials_Model {
  /** Идентификатор назначения */
  prescriptionId?: number;

  /** Название назначения */
  prescriptionName?: string;

  /** Группы выбора биоматериалов */
  biomaterialSelectionGroups?: GetPrescriptionBiomaterials_BiomaterialSelection[];
}

export interface GetPrescriptionDispatchingList_Model {
  /** Назначения */
  prescriptions?: GetPrescriptionDispatchingList_PrescriptionDispatchDetailedModel[];

  /** Способы оплаты */
  availableFundingSources?: FundingSourceTreatmentProgramModel[];
}

export interface GetPrescriptionDispatchingList_PercentageLoadModel {
  /** Дата */
  date?: Date;

  /** Процент загрузки */
  rate?: number;
}

export interface GetPrescriptionDispatchingList_PrescriptionDispatchDetailedModel {
  /**  */
  id?: number;

  /** Название назначения */
  name?: string;

  /**  */
  prescriptionType?: PrescriptionType;

  /** Дата создания назначения */
  dateCreated?: Date;

  /**  */
  fundingSource?: FundingSourceTreatmentProgramModel;

  /** Новые назначения */
  isNew?: boolean;

  /** Особые указания */
  specialInstructions?: string;

  /** Количество */
  quantity?: number;

  /** Оплачено */
  paidQuantity?: number;

  /** Диспетчеризовано */
  dispatchedCount?: number;

  /** Количество для диспетчеризации */
  quantityToDispatch?: number;

  /** Оплачено диспетчеризованных */
  paidDispatchedQuantity?: number;

  /** Кол-во оплаченных, которые требуется диспетчеризоваться */
  paidQuantityToDispatch?: number;

  /** Процент загрузки по датам */
  percentageLoad?: GetPrescriptionDispatchingList_PercentageLoadModel[];
}

export interface GetPrescriptionList_CompositeContentsModel {
  /** Названия услуги */
  serviceItemName?: string;
}

export interface GetPrescriptionList_DiagnosticPrescriptionModel {
  /**  */
  id?: number;

  /** Название назначения */
  name?: string;

  /** Названия услуги */
  serviceItemName?: string;

  /**  */
  serviceItemType?: ServiceItemType;

  /** Дата создания назначения */
  dateCreated?: Date;

  /**  */
  fundingSource?: FundingSourceTreatmentProgramModel;

  /**  */
  treatmentProgram?: TreatmentCaseTreatmentProgramShortModel;

  /** Окончательная стоимость назначения */
  price?: number;

  /**  */
  status?: PrescriptionStatus;

  /** Доступные лечебные программы для выбора способа оплаты */
  availableTreatmentProgramsFundingSources?: FundingSourceTreatmentProgramModel[];

  /**  */
  userCreatedFullName?: PersonNameModel;

  /** Идентификатор услуги назначения */
  serviceItemId?: number;

  /**  */
  canApprove?: CommandInfoModel;

  /**  */
  canReject?: CommandInfoModel;

  /**  */
  canSuspend?: CommandInfoModel;

  /**  */
  canResume?: CommandInfoModel;

  /**  */
  canCancel?: CommandInfoModel;

  /**  */
  canDispatch?: CommandInfoModel;

  /**  */
  canDelete?: CommandInfoModel;

  /**  */
  canComment?: CommandInfoModel;

  /**  */
  canChangeFundingSource?: CommandInfoModel;

  /**  */
  canMarkAsReady?: CommandInfoModel;

  /** Услуга может быть диспетчеризована */
  isDispatchable?: boolean;

  /**  */
  prescriptionType?: PrescriptionType;

  /** Описание услуги */
  serviceItemDescription?: string;

  /** Особые указания */
  specialInstructions?: string;

  /** Индикиатор cito! (срочно) */
  isCito?: boolean;

  /** Найдено отклонение */
  issueFound?: boolean;

  /**  */
  employeeRecommended?: EmployeeModel;

  /**  */
  canSetCito?: CommandInfoModel;

  /**  */
  canSetSpecialInstruction?: CommandInfoModel;

  /**  */
  scheduleItem?: ScheduleItemModel;

  /** Состав назначения */
  compositeContents?: GetPrescriptionList_CompositeContentsModel[];

  /** Ссылка на стартовавший или законенный прием */
  medicalExaminationId?: number;

  /**  */
  examinationCompletionDateTime?: Date;
}

export interface GetPrescriptionList_Model {
  /**  */
  canAddPrescription?: CommandInfoModel;

  /**  */
  canEditTreatmentPrograms?: CommandInfoModel;

  /**  */
  canAddPrescriptionFromTreatmentProgram?: CommandInfoModel;

  /** Лечебные программы */
  treatmentPrograms?: GetPrescriptionList_TreatmentCaseTreatmentProgramModel[];

  /** Консультации и исследования */
  diagnosticPrescriptions?: GetPrescriptionList_DiagnosticPrescriptionModel[];

  /** Процедуры */
  procedurePrescriptions?: GetPrescriptionList_ProcedurePrescriptionModel[];

  /** Медикаменты */
  medicinePrescriptions?: GetPrescriptionList_PrescriptionMedicineModel[];

  /** Доступные способы оплаты */
  availableFundingSources?: FundingSourceModel[];
}

export interface GetPrescriptionList_PrescriptionMedicineModel {
  /**  */
  id?: number;

  /** Название назначения */
  name?: string;

  /** Названия услуги */
  serviceItemName?: string;

  /**  */
  serviceItemType?: ServiceItemType;

  /** Дата создания назначения */
  dateCreated?: Date;

  /**  */
  fundingSource?: FundingSourceTreatmentProgramModel;

  /**  */
  treatmentProgram?: TreatmentCaseTreatmentProgramShortModel;

  /** Окончательная стоимость назначения */
  price?: number;

  /**  */
  status?: PrescriptionStatus;

  /** Доступные лечебные программы для выбора способа оплаты */
  availableTreatmentProgramsFundingSources?: FundingSourceTreatmentProgramModel[];

  /**  */
  userCreatedFullName?: PersonNameModel;

  /** Идентификатор услуги назначения */
  serviceItemId?: number;

  /**  */
  canApprove?: CommandInfoModel;

  /**  */
  canReject?: CommandInfoModel;

  /**  */
  canSuspend?: CommandInfoModel;

  /**  */
  canResume?: CommandInfoModel;

  /**  */
  canCancel?: CommandInfoModel;

  /**  */
  canDispatch?: CommandInfoModel;

  /**  */
  canDelete?: CommandInfoModel;

  /**  */
  canComment?: CommandInfoModel;

  /**  */
  canChangeFundingSource?: CommandInfoModel;

  /**  */
  canMarkAsReady?: CommandInfoModel;

  /** Услуга может быть диспетчеризована */
  isDispatchable?: boolean;

  /**  */
  prescriptionType?: PrescriptionType;

  /** Описание услуги */
  serviceItemDescription?: string;

  /** Особые указания */
  specialInstructions?: string;

  /** Дата начала */
  startDate?: Date;

  /** Дата окончания */
  endDate?: Date;

  /** Количество дней приема, null если постоянно */
  daysCount?: number;

  /** Количество медикамента на один прием */
  amountPerTake?: number;

  /** Общее количество медикаментов за весь период */
  totalAmount?: number;

  /** Название медикамента */
  medicineName?: string;

  /** Единицы назначения - таблетки, капли, мл, может быть пустым, если это мазь, например */
  assignmentUnit?: string;

  /** Количество приемов в день */
  timesPerDay?: number;
}

export interface GetPrescriptionList_ProcedurePrescriptionModel {
  /**  */
  id?: number;

  /** Название назначения */
  name?: string;

  /** Названия услуги */
  serviceItemName?: string;

  /**  */
  serviceItemType?: ServiceItemType;

  /** Дата создания назначения */
  dateCreated?: Date;

  /**  */
  fundingSource?: FundingSourceTreatmentProgramModel;

  /**  */
  treatmentProgram?: TreatmentCaseTreatmentProgramShortModel;

  /** Окончательная стоимость назначения */
  price?: number;

  /**  */
  status?: PrescriptionStatus;

  /** Доступные лечебные программы для выбора способа оплаты */
  availableTreatmentProgramsFundingSources?: FundingSourceTreatmentProgramModel[];

  /**  */
  userCreatedFullName?: PersonNameModel;

  /** Идентификатор услуги назначения */
  serviceItemId?: number;

  /**  */
  canApprove?: CommandInfoModel;

  /**  */
  canReject?: CommandInfoModel;

  /**  */
  canSuspend?: CommandInfoModel;

  /**  */
  canResume?: CommandInfoModel;

  /**  */
  canCancel?: CommandInfoModel;

  /**  */
  canDispatch?: CommandInfoModel;

  /**  */
  canDelete?: CommandInfoModel;

  /**  */
  canComment?: CommandInfoModel;

  /**  */
  canChangeFundingSource?: CommandInfoModel;

  /**  */
  canMarkAsReady?: CommandInfoModel;

  /** Услуга может быть диспетчеризована */
  isDispatchable?: boolean;

  /**  */
  prescriptionType?: PrescriptionType;

  /** Описание услуги */
  serviceItemDescription?: string;

  /** Особые указания */
  specialInstructions?: string;

  /** Количество */
  quantity?: number;

  /** Отпущено */
  releasedCount?: number;

  /** Диспетчеризовано */
  dispatchedCount?: number;

  /**  */
  canExtendProcedures?: CommandInfoModel;

  /** Схема периодичности */
  repetitionSchema?: string;
}

export interface GetPrescriptionList_TreatmentCaseTreatmentProgramModel {
  /** Идентификатор */
  id?: number;

  /** Идентификатор лечебной программы */
  treatmentProgramId?: number;

  /** Наименование */
  name?: string;

  /** Дата начала действия лечебной программы */
  startDate?: Date;

  /** Дата окончания действия программы */
  endDate?: Date;

  /** Лимит расхода по данной программе */
  treatmentExpense?: number;

  /**  */
  canEditDates?: CommandInfoModel;
}

export interface GetPrescriptionMedicineDetailed_EditableModel {
  /** Идентификатор назначения */
  id?: number;

  /**  */
  medicineIntakeMethod?: MedicineIntakeMethodModel;

  /** Количество дней приема, null если постоянно */
  daysCount?: number;

  /** Количество медикамента на один прием */
  amountPerTake?: number;

  /** Индикатор постоянного приема */
  isPermanent?: boolean;

  /** Медикамент с контролем отпуска */
  isReleasable?: boolean;

  /** Дата начала приема */
  startDate?: Date;

  /** Дата окончания приема */
  endDate?: Date;

  /** Особые указания */
  specialInstructions?: string;

  /** Ссылка на склад. null - медикамент "свой" */
  warehouseId?: number;

  /** Название склада. null - медикамент "свой" */
  warehouseName?: string;

  /** Общее кол-во медикамента, учитывая кол-во дней, приемов в день и дозу за раз */
  totalMedicineAmount?: number;

  /** Диспетчеризации медикамента */
  scheduleItems?: MedicineScheduleItemModel[];

  /**  */
  canEditMajorProperties?: CommandInfoModel;
}

export interface GetPrescriptionMedicineDetailed_Model {
  /** Идентификатор назначения */
  id?: number;

  /**  */
  medicineIntakeMethod?: MedicineIntakeMethodModel;

  /** Количество дней приема, null если постоянно */
  daysCount?: number;

  /** Количество медикамента на один прием */
  amountPerTake?: number;

  /** Индикатор постоянного приема */
  isPermanent?: boolean;

  /** Медикамент с контролем отпуска */
  isReleasable?: boolean;

  /** Дата начала приема */
  startDate?: Date;

  /** Дата окончания приема */
  endDate?: Date;

  /** Особые указания */
  specialInstructions?: string;

  /** Ссылка на склад. null - медикамент "свой" */
  warehouseId?: number;

  /** Название склада. null - медикамент "свой" */
  warehouseName?: string;

  /** Общее кол-во медикамента, учитывая кол-во дней, приемов в день и дозу за раз */
  totalMedicineAmount?: number;

  /** Диспетчеризации медикамента */
  scheduleItems?: MedicineScheduleItemModel[];

  /**  */
  canRelease?: CommandInfoModel;

  /**  */
  patientName?: PersonNameModel;

  /** Название назначения */
  name?: string;

  /**  */
  createdUserName?: PersonNameModel;

  /** Тэги ИБ */
  tags?: TagDefinitionModel[];
}

export interface GetPrescriptionProcedureDetailed_Model {
  /**  */
  employeeInitiator?: EmployeeModel;

  /** Количество */
  quantity?: number;

  /** На весь срок лечения */
  autoCalculateQuantity?: boolean;

  /**  */
  procedureRepetitionType?: ProcedureRepetitionTypeModel;

  /** Дата начала отпуска */
  startDate?: Date;

  /** Особые указания */
  specialInstructions?: string;

  /** Длительность */
  duration?: number;

  /** Требует отпуска */
  isReleasable?: boolean;

  /** Параметры отпуска процедуры */
  parameters?: PrescriptionProcedureParameterInfoModel[];

  /** Медикаменты */
  medicines?: PrescriptionProcedureMedicineModel[];

  /**  */
  canEditParameters?: CommandInfoModel;

  /**  */
  canEditMedicines?: CommandInfoModel;

  /**  */
  canEditDuration?: CommandInfoModel;

  /**  */
  canEditAutoCalculateQuantity?: CommandInfoModel;

  /**  */
  canEditQuantity?: CommandInfoModel;

  /**  */
  canEditSpecialInstructions?: CommandInfoModel;

  /**  */
  canEditStartDate?: CommandInfoModel;

  /** Ссылка на лечебный случай */
  treatmentCaseId?: number;

  /** История отпусков\/диспетчеризаций */
  scheduleItems?: ScheduleItemDetailedModel[];

  /** Требуются ли медикаменты */
  isMedicineRequired?: boolean;

  /** При назначении можно использовать только медикаменты из аптеки санатория */
  isLocalDrugstoreMedicine?: boolean;

  /** Требуется ли указание используемых частей тела */
  isBodyPartRequired?: boolean;

  /** Схема человека */
  bodySchemaId?: number;

  /** Целевые части тела для выполнения процедуры */
  selectedBodyParts?: number[];
}

export interface GetProbeOrderPreAnalytics_LabTestPrescriptionInfoModel {
  /** Идентификатор */
  id?: number;

  /** Название */
  name?: string;
}

export interface GetProbeOrderPreAnalytics_Model {
  /** Информация о пробирках, используемых для заказа лабораторного исследования */
  probeOrderTubes?: GetProbeOrderPreAnalytics_ProbeOrderTubeModel[];
}

export interface GetProbeOrderPreAnalytics_ProbeOrderTubeModel {
  /** Штрих код пробирки */
  tubeNumber?: string;

  /** Идентификатор биоматериала */
  biomaterialTypeId?: number;

  /** Название биоматериала */
  biomaterialTypeName?: string;

  /** Кол-во биоматериала, нужное для исследования */
  requiredQuantity?: number;

  /** Назначения, к которым относится пробирка */
  prescriptions?: GetProbeOrderPreAnalytics_LabTestPrescriptionInfoModel[];

  /** Описание процесса забора */
  collectionMethod?: string;

  /** Описание контейнера */
  description?: string;

  /** Идентификатор контейнера */
  containerId?: number;

  /** Название контейнера */
  containerName?: string;

  /** Код контейнера (например, ВПФИОЛ2) */
  containerCode?: string;

  /** Описание условий хранения и транспортировки */
  processingComments?: string;

  /** Информация о режиме температурного хранения для ПФ штрих-кодов */
  storageTemperature?: string;

  /**  */
  commands?: GetProbeOrderPreAnalytics_ProbeOrderTubeModelCommands;
}

export interface GetProbeOrderPreAnalytics_ProbeOrderTubeModelCommands {
  /**  */
  canDelete?: CommandInfoModel;

  /**  */
  canChangePrescriptions?: CommandInfoModel;
}

export interface GetProbeOrderPreAnalytics_Query {
  /** Используемые в рамках исследования биоматериал и контейнер для него */
  prescriptionBiomaterials?: PrescriptionBiomaterialModel[];
}

export interface GetProcedurePrescription_Model {
  /** Детализации процедур */
  prescriptionProcedures?: GetProcedurePrescription_PrescriptionProcedureDetailedModel[];

  /**  */
  canMarkMissed?: CommandInfoModel;

  /**  */
  canCancelRelease?: CommandInfoModel;

  /**  */
  canRelease?: CommandInfoModel;

  /** Нужно ли указывать причину отмены */
  needToSetCancellationReason?: boolean;
}

export interface GetProcedurePrescription_PrescriptionProcedureDetailedModel {
  /**  */
  id?: number;

  /** Комментарий к назначению */
  prescriptionComment?: string;

  /** Особые указания */
  specialInstructions?: string;

  /**  */
  scheduleItem?: ScheduleItemModel;

  /**  */
  medicalRecord?: MedicalRecordModel;

  /** Имя услуги */
  serviceItemName?: string;

  /** Лечебные действия назначения */
  prescriptionTreatmentActions?: PrescriptionTreatmentActionModel[];

  /** Параметры отпуска процедуры */
  parameters?: PrescriptionProcedureParameterInfoModel[];

  /** Зоны действия */
  applicabilityZoneBodyPartIds?: string[];

  /** Медикаменты, нужные для отпуска процедуры */
  prescriptionProcedureMedicines?: PrescriptionProcedureMedicineModel[];

  /** Количество */
  quantity?: number;

  /** Кратность (каждый день, два раза в день, раз в неделю и т.д.) */
  procedureRepetitionTypeName?: string;

  /**  */
  userCreatedFullName?: PersonNameModel;

  /** Время назначения */
  dateCreated?: Date;

  /**  */
  appointment?: AppointmentDetailedModel;

  /** История отпусков\/диспетчеризаций */
  scheduleItems?: ScheduleItemDetailedModel[];

  /** Оплачена ли услуга или следующий отпуск */
  isPaid?: boolean;

  /** Платная услуга */
  chargeableService?: boolean;

  /** Минимальная дата, с которой услуга должна быть диспетчеризована */
  startDate?: Date;

  /** Всего отпущено */
  totalCompleted?: number;

  /** Используемая схема применения */
  bodySchemaId?: number;

  /** Целевые части тела для выполнения процедуры */
  selectedBodyParts?: number[];
}

export interface GetScheduleItems_Model {
  /** Идентификатор */
  id?: number;

  /**  */
  status?: ScheduleItemStatus;

  /** Дата начала */
  date?: Date;

  /** Время начала */
  startTime?: string;

  /** Длительность */
  duration?: number;

  /** Комментарий к резерву */
  comment?: string;

  /**  */
  servicePoint?: ServicePointModel;

  /** Название услуги */
  serviceItemName?: string;

  /**  */
  patientInfo?: GetScheduleItems_PatientModel;

  /** Идентификатор лечебного случая (пусто для резервов) */
  treatmentCaseId?: number;

  /**  */
  itemType?: ScheduleItemType;

  /**  */
  commands?: GetServicePointsSchedules_ScheduleItemCommands;

  /** Дата создания диспетчеризации */
  dateCreated?: Date;

  /**  */
  userCreated?: PersonNameModel;
}

export interface GetScheduleItems_PatientModel {
  /** Номер ИБ */
  recordNo?: string;

  /**  */
  fullName?: PersonNameModel;

  /** Комната */
  roomName?: string;

  /** Тэги ИБ (Попадают только с !:TagScope.Dispatching ) */
  tags?: TagDefinitionModel[];
}

export interface GetServicePointsSchedules_Model {
  /** Идентификатор кабинета */
  id?: number;

  /** Диспетчеризации */
  scheduleItems?: GetServicePointsSchedules_ScheduleItemModel[];

  /** Нерабочие периоды */
  nonWorkingPeriods?: NonWorkingPeriodModel[];

  /** Периоды с неединичной вместимостью и их диспетчеризации */
  multiCapacityPeriods?: GetServicePointsSchedules_MultiCapacityPeriodDetailed[];

  /** Конфликты возможной диспетчеризации */
  dispatchConflicts?: DispatchConflict[];

  /**  */
  commands?: GetServicePointsSchedules_ServicePointCommands;

  /**  */
  scheduleGrid?: ScheduleGridModel;

  /** Длительность услуги по-умолчанию в минутах. Сколько времени выделять при клике */
  defaultDuration?: number;
}

export interface GetServicePointsSchedules_MultiCapacityPeriodDetailed {
  /** Идентификатор */
  id?: number;

  /** Дата */
  date?: Date;

  /** Время начала периода */
  startTime?: string;

  /** Время окончания периода */
  endTime?: string;

  /** Вместимость на единицу времени */
  capacity?: number;

  /** Комментарий */
  comment?: string;

  /** Диспетчеризации связанные с периодом */
  scheduleItems?: GetServicePointsSchedules_ScheduleItemModel[];
}

export interface GetServicePointsSchedules_ScheduleItemCommands {
  /**  */
  canDelete?: CommandInfoModel;

  /**  */
  canEdit?: CommandInfoModel;
}

export interface GetServicePointsSchedules_ScheduleItemModel {
  /** Идентификатор */
  id?: number;

  /**  */
  status?: ScheduleItemStatus;

  /** Дата диспетчеризации */
  date?: Date;

  /** Время начала */
  startTime?: string;

  /** Время окончания */
  endTime?: string;

  /** Резерв ли это. Резерв не содержит информации о назначении, услуге, ИБ */
  isReserve?: boolean;

  /** Комментарий. Для резерва - комментарий диспетчеризации, иначе - комментарий назначения */
  comment?: string;

  /**  */
  patientName?: PersonNameModel;

  /** Идентификатор услуги */
  serviceItemId?: number;

  /**  */
  commands?: GetServicePointsSchedules_ScheduleItemCommands;

  /** Услуга блокирует расписание */
  isBlockingSchedule?: boolean;

  /** Количество (для резервов) */
  quantity?: number;
}

export interface GetServicePointsSchedules_ServicePointCommands {
  /**  */
  canReserve?: CommandInfoModel;
}

export interface GetStatisticsRequest {
  /**  */
  fullReport?: boolean;
}

export interface GetStatisticsResponse {
  /**  */
  checks?: string[];
}

export interface GetTitlePage_AddressModel {
  /** Идентификатор */
  id?: number;

  /**  */
  country?: CountryModel;

  /** Область */
  region?: string;

  /** Район */
  district?: string;

  /** Тип населенного пункта */
  settlementType?: string;

  /** Название населенного пункта */
  city?: string;

  /** Улица */
  street?: string;

  /** Номер дома */
  houseNo?: string;

  /** Номер строения */
  buildingNo?: string;

  /** Квартира */
  flatNo?: string;
}

export interface GetTitlePage_DiagnosisCommands {
  /**  */
  canApprove?: CommandInfoModel;

  /**  */
  canReject?: CommandInfoModel;

  /**  */
  canMakeMain?: CommandInfoModel;

  /**  */
  canMakeFirstTime?: CommandInfoModel;

  /**  */
  canEdit?: CommandInfoModel;

  /**  */
  canDelete?: CommandInfoModel;

  /**  */
  canIncludeInEpicrisis?: CommandInfoModel;
}

export interface GetTitlePage_DiagnosisDetailedModel {
  /** Идентификатор */
  id?: number;

  /** Идентификатор кода по МКБ */
  icdItemId?: number;

  /** Код заболевания\/группы */
  icdItemCode?: string;

  /** Код по МКБ */
  icdItemName?: string;

  /** Клинический диагноз */
  clinicalDiagnosis?: string;

  /** Основной диагноз */
  isMain?: boolean;

  /** Осложнение основного заболевания */
  isComplication?: boolean;

  /** Выявлен ли впервые */
  isFirstTime?: boolean;

  /** Включается ли диагноз в эпикриз */
  isIncludedInEpicris?: boolean;

  /**  */
  type?: DiagnosisType;

  /**  */
  status?: DiagnosisStatus;

  /**  */
  commands?: GetTitlePage_DiagnosisCommands;
}

export interface GetTitlePage_DiagnosisModel {
  /** Идентификатор */
  id?: number;

  /** Идентификатор кода по МКБ */
  icdItemId?: number;

  /** Код заболевания\/группы */
  icdItemCode?: string;

  /** Код по МКБ */
  icdItemName?: string;
}

export interface GetTitlePage_DocumentDataModel {
  /** Идентификатор */
  id?: number;

  /**  */
  documentType?: DocumentTypeModel;

  /**  */
  issuerCountry?: CountryModel;

  /** Серия */
  documentSeries?: string;

  /** Номер */
  documentNumber?: string;

  /** Дата выдачи */
  issueDate?: Date;

  /** Кем выдано */
  issuerInfo?: string;

  /** Код подразделения */
  issuerAuthorityCode?: string;

  /** Срок действия */
  expirationDate?: Date;
}

export interface GetTitlePage_FormInfoModel {
  /** Идентификатор формы */
  id?: number;

  /** Наименование */
  name?: string;

  /** Идентификатор владельца формы */
  ownerId?: number;
}

export interface GetTitlePage_InsurancePolicyModel {
  /** Идентификатор */
  id?: number;

  /**  */
  insurancePolicyType?: InsurancePolicyTypeModel;

  /** Серия */
  series?: string;

  /** Номер полиса */
  number?: string;

  /** Название страховой компании */
  companyName?: string;
}

export interface GetTitlePage_Model {
  /** Идентификатор */
  id?: number;

  /** Номер ИБ */
  recordNo?: string;

  /**  */
  patient?: GetTitlePage_PatientModel;

  /** Плановая дата заезда из направления на лечение (путевки) - если есть */
  planStartDate?: Date;

  /** Плановое время заезда */
  planStartTime?: string;

  /** Плановая дата выезда из направления на лечение (путевки) - если есть */
  planEndDate?: Date;

  /** Плановое время выезда */
  planEndTime?: string;

  /** Это время заезда или время открытия амбулаторной карты, фактическая */
  startDate?: Date;

  /** Фактическое время начала лечения (заезда) */
  startTime?: string;

  /** Дата завершения лечебного случая (дата выезда гостя, фактическая) */
  endDate?: Date;

  /** Фактическое время начала лечения (выезда) */
  endTime?: string;

  /** Длительность проживания - расчитана на основе данных о датах лечения и схеме расчёта
(в текущей версии считает по схеме ночного проживания: дата окончания лечения - дата начала + 1) */
  treatmentDuration?: number;

  /**  */
  status?: TreatmentCaseStatus;

  /**  */
  reservationStatus?: ReservationStatus;

  /** Идентификатор режима лечения */
  treatmentModeId?: number;

  /** Режим лечения */
  treatmentModeName?: string;

  /** Доступные режимы лечения */
  availableTreatmentModes?: SearchTreatmentModes_Model[];

  /** Причины установки режима лечения */
  treatmentModeJustifications?: GetTitlePage_TreatmentModeJustificationModel[];

  /** Особые указания к режиму лечения */
  treatmentModeComment?: string;

  /**  */
  room?: RoomModel;

  /**  */
  doctor?: EmployeeModel;

  /**  */
  nurse?: EmployeeModel;

  /**  */
  mainTreatmentProgram?: TreatmentProgramModel;

  /** Диагнозы */
  diagnoses?: GetTitlePage_DiagnosisDetailedModel[];

  /** Идентификатор показанности к лечению */
  treatmentIndicationId?: number;

  /** Показанность к лечению */
  treatmentIndicationName?: string;

  /**  */
  availableTreatmentIndications?: SearchTreatmentIndications_Model[];

  /** Комментарий к показанности к лечению */
  treatmentIndicationComment?: string;

  /** Причины установки показанности к лечению */
  treatmentIndicationJustifications?: GetTitlePage_TreatmentIndicationJustificationModel[];

  /** Лечебные программы */
  treatmentPrograms?: GetTitlePage_TreatmentProgramInfo[];

  /** Комментарий */
  comment?: string;

  /**  */
  commands?: GetTitlePage_ModelCommands;

  /**  */
  organizationUnit?: OrganizationUnitModel;

  /**  */
  recordType?: MedicalRecordType;

  /** Идентификатор профиля */
  patientProfileId?: number;

  /**  */
  medicalOrganization?: SearchMedicalOrganizations_Model;

  /** Особые отметки */
  specialMarks?: GetTitlePage_SpecialMarkValueModel[];

  /** Известная дата прибытия
(фактическая или планируемая) */
  knownStartDate?: Date;

  /** Известное время прибытия
(фактическое или планируемое) */
  knownStartTime?: string;

  /** Известная дата окончания лечения
(фактическая или планируемая) */
  knownEndDate?: Date;

  /** Известное время окончания лечения
(фактическое или планируемое) */
  knownEndTime?: string;

  /** Формы */
  forms?: GetTitlePage_FormInfoModel[];

  /** Пищевые аллергены */
  foodAllergens?: string[];
}

export interface GetTitlePage_ModelCommands {
  /**  */
  canEditTitlePage?: CommandInfoModel;

  /**  */
  canSetDoctor?: CommandInfoModel;

  /**  */
  canSetNurse?: CommandInfoModel;

  /**  */
  canEditTreatmentProgram?: CommandInfoModel;

  /**  */
  canEditDiagnosis?: CommandInfoModel;

  /**  */
  canEditTreatmentMode?: CommandInfoModel;

  /**  */
  canEditForms?: CommandInfoModel;

  /** Показывать ли телефоны пациента */
  showPhone?: boolean;
}

export interface GetTitlePage_PatientModel {
  /** Идентификатор */
  id?: number;

  /**  */
  patientFullName?: PersonNameModel;

  /**  */
  sex?: Sex;

  /** День рождения */
  birthDate?: Date;

  /** Email */
  email?: string;

  /** Телефоны пациента\/родственников */
  phones?: GetTitlePage_PatientPhoneModel[];

  /** Место работы */
  workPlace?: string;

  /** Должность */
  workPosition?: string;

  /** Идентификатор предпочитаемого языка */
  languageId?: number;

  /** Предпочтительный язык */
  languageName?: string;

  /**  */
  address?: GetTitlePage_AddressModel;

  /**  */
  documentData?: GetTitlePage_DocumentDataModel;

  /** СНИЛС */
  snils?: string;

  /**  */
  insurancePolicy?: GetTitlePage_InsurancePolicyModel;

  /**  */
  socialStatus?: GetTitlePage_SocialStatusModel;
}

export interface GetTitlePage_PatientPhoneModel {
  /** Идентификатор */
  id?: number;

  /** Название (Тип номера) */
  name?: string;

  /** Номер телефона */
  phoneNumber?: string;

  /** Признак "Основной" */
  isMain?: boolean;
}

export interface GetTitlePage_SocialStatusModel {
  /** Идентификатор */
  id?: number;

  /** Название (Тип номера) */
  name?: string;
}

export interface GetTitlePage_SpecialMarkValueModel {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Код */
  code?: string;

  /** Значение */
  value?: string;
}

export interface GetTitlePage_TreatmentIndicationJustificationModel {
  /** Идентификатор */
  id?: number;

  /**  */
  diagnosis?: GetTitlePage_DiagnosisModel;
}

export interface GetTitlePage_TreatmentModeJustificationModel {
  /** Идентификатор */
  id?: number;

  /**  */
  diagnosis?: GetTitlePage_DiagnosisModel;
}

export interface GetTitlePage_TreatmentProgramInfo {
  /** Идентификатор */
  id?: number;

  /** Наименование */
  name?: string;

  /** Дата начала действия лечебной программы */
  startDate?: Date;

  /** Дата окончания действия программы */
  endDate?: Date;

  /** Лимит расхода по данной программе */
  treatmentExpense?: number;

  /** Идентификатор лечебной программы */
  treatmentProgramId?: number;
}

export interface GetTitlePageWithPatientProfile_Query {
  /** Идентификатор профиля пациента */
  patientProfileId?: number;

  /**  */
  model?: GetTitlePage_PatientModel;
}

export interface GetTreatmentCaseHeader_Model {
  /** Номер ИБ */
  recordNo?: string;

  /**  */
  patientFullName?: PersonNameModel;

  /** Возраст */
  age?: number;

  /** Тэги ИБ */
  tags?: PatientTagModel[];

  /**  */
  canCloseTreatmentCase?: CommandInfoModel;

  /**  */
  canSetTreatmentCaseDepartured?: CommandInfoModel;

  /** Дата прибытия (фактическая, если заполнена, или плановая) */
  knownStartDate?: Date;

  /** Время прибытия (фактическая, если заполнена, или плановая) */
  knownStartTime?: string;

  /** Дата выезда (фактическая, если заполнена, или плановая) */
  knownEndDate?: Date;

  /** Время выезда (фактическая, если заполнена, или плановая) */
  knownEndTime?: string;

  /** Идентификатор лицевого счёта */
  accountId?: number;

  /**  */
  medicalRecordType?: MedicalRecordType;

  /**  */
  sex?: Sex;
}

export interface GetTreatmentCaseMeasurementSheets_Model {
  /** Листы имерений лечебного случая */
  measurementSheets?: MeasurementSheetModel[];

  /**  */
  canEditMeasurements?: CommandInfoModel;
}

export interface GetTreatmentCaseToc_ConsultationTocNode {
  /** Название */
  name?: string;

  /** Дочерние узлы */
  child?: GetTreatmentCaseToc_LinkAnchor[];

  /** Идентификатор консультации */
  medicalExaminationId?: number;

  /**  */
  status?: AppointmentStatus;

  /** Дата приема */
  examinationDate?: Date;

  /**  */
  specialistFullName?: PersonNameModel;
}

export interface GetTreatmentCaseToc_FormTocNode {
  /** Название */
  name?: string;

  /** Дочерние узлы */
  child?: GetTreatmentCaseToc_LinkAnchor[];

  /** Идентификатор формы */
  formId?: number;

  /** Идентификатор владельца */
  ownerId?: number;
}

export interface GetTreatmentCaseToc_LinkAnchor {
  /** Название */
  name?: string;

  /** Ссылка */
  anchorLink?: string;

  /** Дочерние узлы */
  anchors?: GetTreatmentCaseToc_LinkAnchor[];
}

export interface GetTreatmentCaseToc_RelatedTreatmentCaseTocNode {
  /** Название */
  name?: string;

  /** Дочерние узлы */
  child?: GetTreatmentCaseToc_LinkAnchor[];

  /** Идентификатор лечебного случая. null для внешней ИБ */
  treatmentCaseId?: number;

  /** Номер ИБ */
  recordNo?: string;

  /** Актуальная дата начала лечебного случая */
  knownStartDate?: Date;

  /** Актуальная дата окончания лечебного случая */
  knownEndDate?: Date;

  /**  */
  status?: TreatmentCaseStatus;

  /**  */
  reservationStatus?: ReservationStatus;

  /** Внешняя ИБ */
  isExternal?: boolean;

  /** Название лечебного учреждения у внешней ИБ */
  treatmentFacilityName?: string;

  /** Внешний Id */
  externalMedicalRecordId?: number;
}

export interface GetTreatmentCaseToc_TableOfContents {
  /**  */
  titlePage?: TocNode_GetTreatmentCaseToc_LinkAnchor;

  /**  */
  forms?: TocNode_GetTreatmentCaseToc_FormTocNode;

  /**  */
  nutrition?: TocNode_GetTreatmentCaseToc_LinkAnchor;

  /**  */
  attachedDocuments?: TocNode_GetTreatmentCaseToc_LinkAnchor;

  /**  */
  invoices?: TocNode_GetTreatmentCaseToc_LinkAnchor;

  /**  */
  initialConsultation?: GetTreatmentCaseToc_ConsultationTocNode;

  /**  */
  consultations?: TocNode_GetTreatmentCaseToc_ConsultationTocNode;

  /**  */
  finalConsultation?: GetTreatmentCaseToc_ConsultationTocNode;

  /**  */
  mainPrescriptionList?: TocNode_GetTreatmentCaseToc_LinkAnchor;

  /**  */
  measurements?: TocNode_GetTreatmentCaseToc_LinkAnchor;

  /**  */
  patientSchedule?: TocNode_GetTreatmentCaseToc_LinkAnchor;

  /**  */
  changeLog?: TocNode_GetTreatmentCaseToc_LinkAnchor;

  /**  */
  relatedTreatmentCases?: TocNode_GetTreatmentCaseToc_RelatedTreatmentCaseTocNode;
}

export interface GroupTransactionModel {
  /** Название */
  name?: string;

  /** Владелец транзакции */
  ownerId?: string;

  /** Общее кол-во транзакций в группе */
  totalCount?: number;

  /** Количество транзакций с предварительной датой начисления */
  tentativeCount?: number;

  /** Количество транзакций с запланированной датой начисления */
  scheduledCount?: number;

  /** Количество проведенных транзакций */
  postedCount?: number;

  /** Цена за одну единицу */
  amountPerOne?: number;

  /** Пример транзакции в группе, по которой будут восстановлены другие транзакции в группе */
  sampleTransactionId?: number;

  /** Все транзакции в группе или скорректированы или являются коррекциями */
  areCorrected?: boolean;

  /** Скидка в процентах */
  discountPercentage?: number;

  /** Ссылка на инвойс */
  invoiceId?: number;
}

export interface IdentityController_Password {
  /**  */
  newPassword?: string;
}

export interface IncludeDiagnosisInEpicrisis_Command {
  /** Идентификатор диагноза */
  id?: number;

  /** Добавлять ли в эпикриз */
  includeInEpicrisis?: boolean;
}

export interface InsurancePolicyTypeModel {
  /**  */
  id?: number;

  /**  */
  name?: string;
}

export interface InvoiceCommands {
  /**  */
  canPay?: CommandInfoModel;

  /**  */
  canCancel?: CommandInfoModel;

  /**  */
  canFiscalize?: CommandInfoModel;

  /**  */
  canCancelFiscalization?: CommandInfoModel;

  /**  */
  canPrintAdvancePaymentReceipt?: CommandInfoModel;

  /**  */
  canCancelAdvancePaymentReceipt?: CommandInfoModel;

  /**  */
  canPrintFinalReceipt?: CommandInfoModel;

  /**  */
  canCancelFinalReceipt?: CommandInfoModel;
}

export interface InvoiceDetailedModel {
  /** Идентификатор */
  id?: number;

  /** Номер счёта */
  invoiceNo?: string;

  /**  */
  status?: InvoiceStatus;

  /**  */
  fiscalState?: FiscalState;

  /** Сообщение фискализации (например об ошибке) */
  fiscalMessage?: string;

  /** Сумма счёта */
  amount?: number;

  /** Комментарий */
  comment?: string;

  /** Дата создания */
  dateCreated?: Date;

  /** Пользователь, создавший счёт */
  userCreated?: string;

  /**  */
  commands?: InvoiceCommands;

  /** Сумма начислений */
  revenueSum?: number;

  /** Сумма оплат */
  paymentSum?: number;

  /** Название лицевого счета, на котором находится инвойс */
  accountName?: string;

  /** Транзакции счёта */
  transactions?: TransactionModel[];
}

export interface InvoiceModel {
  /** Идентификатор */
  id?: number;

  /** Номер счёта */
  invoiceNo?: string;

  /**  */
  status?: InvoiceStatus;

  /**  */
  fiscalState?: FiscalState;

  /** Сообщение фискализации (например об ошибке) */
  fiscalMessage?: string;

  /** Сумма счёта */
  amount?: number;

  /** Комментарий */
  comment?: string;

  /** Дата создания */
  dateCreated?: Date;

  /** Пользователь, создавший счёт */
  userCreated?: string;

  /**  */
  commands?: InvoiceCommands;

  /** Сумма начислений */
  revenueSum?: number;

  /** Сумма оплат */
  paymentSum?: number;

  /** Название лицевого счета, на котором находится инвойс */
  accountName?: string;
}

export interface LabTestPatientModel {
  /**  */
  patientFullName?: PersonNameModel;

  /** Дата рождения */
  birthDate?: Date;

  /**  */
  sex?: Sex;

  /** Тэги ИБ */
  tags?: TagDefinitionModel[];
}

export interface ListItemValueDetailedModel {
  /**  */
  id?: number;

  /** Значение списочного варианта */
  value?: string;

  /** Цвет */
  color?: string;
}

export interface ListItemValueModel {
  /** Идентификатор Sanatorium.DataAccess.Models.Forms.ListItemValue */
  id?: number;

  /** Название значения */
  value?: string;

  /** Цвет элемента списка */
  color?: string;

  /** Дата удаления */
  dateDeleted?: Date;
}

export interface ListItemValueSetModel {
  /**  */
  id?: number;

  /**  */
  value?: string;
}

export interface Login_Command {
  /**  */
  username?: string;

  /**  */
  password?: string;
}

export interface MakeReservation_Command {
  /** Дата резерва */
  date?: Date;

  /** Время с которого создать резерв */
  startTime?: string;

  /** Длительность в минутах */
  duration?: number;

  /** Количество дней для резерва */
  quantity?: number;

  /** Количетво занимаемых резервом мест (для кабинетов с вместимостью более 1 человека) */
  placesQuantity?: number;

  /** Идентификатор кабинета */
  servicePointId?: number;

  /** Комментарий резерва */
  comment?: string;

  /** Идентификатор схемы периодичности, если требуется создать резерв на несколько дней */
  repetitionTypeId?: number;
}

export interface MarkAsRead_Command {
  /** Идентификаторы оповещений */
  notificationIds?: number[];
}

export interface MeasurementSheetModel {
  /** Идентификатор листа измерения */
  id?: number;

  /** Идентификатор типа измерения */
  measurementTypeId?: number;

  /** Для новых измерений использовать текущее время */
  useCurrentTime?: boolean;

  /** Время взятия. Строка значений времени в формате HH:mm */
  defaultTakeTimes?: string;

  /** Название листа измерений */
  name?: string;

  /** Типы значения измеряемого параметра */
  measurementValueTypes?: MeasurementValueTypeModel[];
}

export interface MeasurementSheetRecordModel {
  /**  */
  id?: number;

  /** Значения записи измерения */
  measurementValues?: MeasurementValueModel[];

  /** Дата измерения */
  dateTaken?: Date;

  /**  */
  userCreated?: PersonNameModel;
}

export interface MeasurementValueModel {
  /**  */
  id?: number;

  /** Тип измерения */
  measurementValueTypeId?: number;

  /** Значение */
  value?: number;
}

export interface MeasurementValueTypeModel {
  /** Идентификатор типа значения измеряемого параметра */
  id?: number;

  /** Единица измерения */
  unitName?: string;

  /** Название типа значения измеряемого параметра */
  name?: string;

  /** Дискретность */
  discreteness?: number;

  /** Обязательный параметр */
  isRequired?: boolean;

  /** Цвет на графике измерений */
  color?: string;

  /** Минимально возможное значение */
  minValue?: number;

  /** Максимально возможное значение */
  maxValue?: number;

  /** Значение по умолчанию */
  defaultValue?: number;
}

export interface MedicalExaminationResultModel {
  /** Идентификатор */
  medicalExaminationId?: number;

  /** Форма протокола (метаданные для отображения на UI) */
  templateForm?: FormKitElement[];

  /** Функции, используемые шаблоном */
  getFormKitFunctions?: FormKitFunction[];

  /** Данные протокола */
  data?: object;
}

export interface MedicalRecordModel {
  /**  */
  patientFullName?: PersonNameModel;

  /** Номер ИБ */
  recordNo?: string;

  /** Имя комнаты, в которой проживает пациент */
  roomNo?: string;

  /** Имя санаторной программы пациента */
  programName?: string;

  /** Дата заезда */
  arrivalDate?: Date;

  /** Дата выезда */
  departureDate?: Date;

  /** Дата рождения */
  birthDate?: Date;

  /**  */
  doctor?: PersonNameModel;

  /** Тэги ИБ (Попадают только с Sanatorium.DataAccess.Models.MedicalRecords.MedicalRecord или !:TagScope.None ) */
  tags?: TagDefinitionModel[];
}

export interface MedicineAppointmentModel {
  /** Идентификатор отпуска */
  id?: number;

  /**  */
  status?: AppointmentStatus;

  /** Кол-во отпущенного медикамента за раз */
  unitCount?: number;

  /** Дата создания отпуска */
  dateCreated?: Date;
}

export interface MedicineIntakeMethodModel {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Количество приемов в день */
  timesPerDay?: number;
}

export interface MedicineRelease_Command {
  /** Ссылка на назначение */
  prescriptionId?: number;

  /** Перечень отпусков\/неявок */
  processItems?: MedicineRelease_MedicineReleaseModel[];

  /** Отпускающий специалист */
  releaseEmployeeUserId?: number;

  /** Комментарий */
  comment?: string;

  /** Кабинет отпуска медикаментов */
  servicePointId?: number;
}

export interface MedicineRelease_MedicineReleaseModel {
  /** Идентификатор диспетчеризации */
  scheduleItemId?: number;

  /**  */
  releaseActionType?: MedicineRelease_ReleaseActionType;
}

export interface MedicineScheduleItemModel {
  /** Идентификатор диспетчеризации */
  id?: number;

  /**  */
  status?: ScheduleItemStatus;

  /** Дата планируемого отпуска */
  date?: Date;

  /** Время планируемого отпуска */
  startTime?: string;

  /**  */
  appointment?: MedicineAppointmentModel;
}

export interface ModelCommands {
  /**  */
  canTakeBiomaterial?: CommandInfoModel;

  /**  */
  canViewMedicalExamination?: CommandInfoModel;
}

export interface NonWorkingPeriodModel {
  /** Идентификатор */
  id?: number;

  /** Дата */
  date?: Date;

  /** Время начала периода */
  startTime?: string;

  /** Время окончания периода */
  endTime?: string;

  /** Комментарий */
  comment?: string;
}

export interface OpenShiftResponse {
  /**  */
  terminalId?: string;
}

export interface Option {
  /**  */
  id?: string;

  /**  */
  value?: string;
}

export interface OrganizationUnitModel {
  /** Идентификатор */
  id?: number;

  /** Название орг структуры */
  name?: string;
}

export interface PagedResponse_AccountInfoModel {
  /**  */
  results?: AccountInfoModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_DictionaryModel {
  /**  */
  results?: DictionaryModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_EmployeeModel {
  /**  */
  results?: EmployeeModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_FieldModel {
  /**  */
  results?: FieldModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_FieldValueModel {
  /**  */
  results?: FieldValueModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_GetConsultationsForStart_Model {
  /**  */
  results?: GetConsultationsForStart_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_GetDiagnosesForJustification_Model {
  /**  */
  results?: GetDiagnosesForJustification_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_GetScheduleItems_Model {
  /**  */
  results?: GetScheduleItems_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_InvoiceModel {
  /**  */
  results?: InvoiceModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_MeasurementSheetRecordModel {
  /**  */
  results?: MeasurementSheetRecordModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_OrganizationUnitModel {
  /**  */
  results?: OrganizationUnitModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_PrescriptionProbeModel {
  /**  */
  results?: PrescriptionProbeModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchAttachmentCategories_Model {
  /**  */
  results?: SearchAttachmentCategories_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchCountries_Model {
  /**  */
  results?: SearchCountries_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchDiets_Model {
  /**  */
  results?: SearchDiets_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchDocumentTypes_Model {
  /**  */
  results?: SearchDocumentTypes_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchExternalDevices_Model {
  /**  */
  results?: SearchExternalDevices_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchExternalLabs_Model {
  /**  */
  results?: SearchExternalLabs_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchFiles_Model {
  /**  */
  results?: SearchFiles_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchForms_Model {
  /**  */
  results?: SearchForms_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchImageRadiationImpacts_Model {
  /**  */
  results?: SearchImageRadiationImpacts_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchInsurancePolicyTypes_Model {
  /**  */
  results?: SearchInsurancePolicyTypes_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchMedicalExaminationRadiationImpact_Model {
  /**  */
  results?: SearchMedicalExaminationRadiationImpact_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchMedicalExaminationTreatmentActions_Model {
  /**  */
  results?: SearchMedicalExaminationTreatmentActions_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchMedicalOrganizations_Model {
  /**  */
  results?: SearchMedicalOrganizations_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchMedicineIntakeMethods_Model {
  /**  */
  results?: SearchMedicineIntakeMethods_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchMedicines_Model {
  /**  */
  results?: SearchMedicines_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchMedicinesStock_Model {
  /**  */
  results?: SearchMedicinesStock_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchMyDispatchedConsultations_Model {
  /**  */
  results?: SearchMyDispatchedConsultations_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchNotifications_Model {
  /**  */
  results?: SearchNotifications_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchPatientProfiles_Model {
  /**  */
  results?: SearchPatientProfiles_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchPrescriptionMedicinesForRelease_Model {
  /**  */
  results?: SearchPrescriptionMedicinesForRelease_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchPrescriptionsForDispatch_PrescriptionDetailedModel {
  /**  */
  results?: SearchPrescriptionsForDispatch_PrescriptionDetailedModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchProcedureRepetitionTypes_Model {
  /**  */
  results?: SearchProcedureRepetitionTypes_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchProcedures_Model {
  /**  */
  results?: SearchProcedures_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchRegistrationInfo_Model {
  /**  */
  results?: SearchRegistrationInfo_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchReusableText_Model {
  /**  */
  results?: SearchReusableText_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchRoles_Model {
  /**  */
  results?: SearchRoles_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchRooms_Model {
  /**  */
  results?: SearchRooms_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchSocialStatuses_Model {
  /**  */
  results?: SearchSocialStatuses_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchSpecialMarks_Model {
  /**  */
  results?: SearchSpecialMarks_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchTransactionCodes_Model {
  /**  */
  results?: SearchTransactionCodes_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchTreatmentCaseChanges_Model {
  /**  */
  results?: SearchTreatmentCaseChanges_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchTreatmentCaseDiets_Model {
  /**  */
  results?: SearchTreatmentCaseDiets_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchTreatmentCaseFoodAllergens_Model {
  /**  */
  results?: SearchTreatmentCaseFoodAllergens_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchTreatmentCases_Model {
  /**  */
  results?: SearchTreatmentCases_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchTreatmentCasesForDispatch_Model {
  /**  */
  results?: SearchTreatmentCasesForDispatch_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchTreatmentIndications_Model {
  /**  */
  results?: SearchTreatmentIndications_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchTreatmentModes_Model {
  /**  */
  results?: SearchTreatmentModes_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_SearchTreatmentPrograms_Model {
  /**  */
  results?: SearchTreatmentPrograms_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_ServicePointModel {
  /**  */
  results?: ServicePointModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_TagDefinitionModel {
  /**  */
  results?: TagDefinitionModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_TransactionModel {
  /**  */
  results?: TransactionModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_TreatmentCaseModel {
  /**  */
  results?: TreatmentCaseModel[];

  /**  */
  count?: number;
}

export interface PagedResponse_TreeSearchServiceItems_Model {
  /**  */
  results?: TreeSearchServiceItems_Model[];

  /**  */
  count?: number;
}

export interface PagedResponse_WarehouseModel {
  /**  */
  results?: WarehouseModel[];

  /**  */
  count?: number;
}

export interface PatientModel {
  /** Идентификатор лечебного случая */
  treatmentCaseId?: number;

  /** Номер ИБ */
  recordNo?: string;

  /**  */
  fullName?: PersonNameModel;

  /** Комната пациента */
  roomName?: string;

  /** Дата начала лечебного случая */
  startDate?: Date;

  /** Дата окончания лечебного случая */
  endDate?: Date;
}

export interface PatientTagModel {
  /** Идентификатор */
  id?: number;

  /**  */
  tagDefinition?: TagDefinitionModel;

  /**  */
  canDelete?: CommandInfoModel;
}

export interface PayInvoiceModel {
  /** Код системы, откуда осуществляется оплата */
  sourceSystemCode?: string;

  /** Транзакции на оплату */
  paymentTransactions?: PaymentTransactionModel[];

  /**  */
  payerParameters?: PayerParameters;
}

export interface PayerInfo {
  /** ФИО */
  fullName?: string;

  /** Название компании */
  companyName?: string;

  /** ИНН */
  taxIdentificationNumber?: string;

  /** Номера телефонов */
  phones?: string[];

  /** Адрес электронной почты */
  email?: string;
}

export interface PayerParameters {
  /** Электронная почта */
  email?: string;

  /** Номер телефона */
  phone?: string;

  /** Отправлять чек на номер телефона или электронную почту */
  sendCheckToPayer?: boolean;
}

export interface PaymentTransactionModel {
  /** Идентификатор кода транзакции */
  transactionCodeId?: number;

  /** Сумма платежа */
  amount?: number;
}

export interface PersonNameModel {
  /** Имя */
  firstName?: string;

  /** Фамилия */
  lastName?: string;

  /** Отчество */
  middleName?: string;

  /** Обращение к человеку */
  title?: string;
}

export interface PrescriptionBiomaterialModel {
  /** Назначение биоматериала */
  prescriptionId?: number;

  /** Тип биоматериала */
  biomaterialTypeId?: number;

  /** Контейнер */
  biomaterialContainerId?: number;
}

export interface PrescriptionMedicineUpdateModel {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Способ приема */
  medicineIntakeMethodId?: number;

  /** Дата начала */
  startDate?: Date;

  /** Дата окончания приема */
  endDate?: Date;

  /** Медикамент с контролем отпуска */
  isReleasable?: boolean;

  /** Количество дней приема, null если постоянно */
  daysCount?: number;

  /** Индикатор постоянного приема */
  isPermanent?: boolean;

  /** Количество медикамента на один прием */
  amountPerTake?: number;

  /** Особые указания */
  specialInstructions?: string;
}

export interface PrescriptionModel {
  /**  */
  id?: number;

  /** Количество услуг у назначения */
  quantity?: number;

  /** Количество полностью отпущенных услуг */
  totalComplete?: number;

  /**  */
  status?: PrescriptionStatus;

  /** Идентификатор услуги */
  serviceItemId?: number;

  /** Название услуги */
  serviceItemName?: string;

  /** Платная услуга */
  chargeableService?: boolean;
}

export interface PrescriptionProbeModel {
  /** Идентификатор */
  id?: number;

  /** Наименование */
  name?: string;

  /** Индикиатор cito! (срочно) */
  isCito?: boolean;

  /** Номер ИБ */
  recordNo?: string;

  /**  */
  patientFullName?: PersonNameModel;

  /** Дата рождения */
  birthDate?: Date;

  /** Возраст */
  age?: number;

  /**  */
  sex?: Sex;

  /** Номер комнаты проживания */
  roomNo?: string;

  /** Название санаторной программы */
  sanatoriumProgramName?: string;

  /** Дата заезда\/начала лечения */
  treatmentStartDate?: Date;

  /** Дата выезда\/окончания лечения */
  treatmentEndDate?: Date;

  /**  */
  doctorFullName?: PersonNameModel;

  /** Тэги ИБ */
  tags?: TagDefinitionModel[];

  /** Направление на анализ */
  specialInstructions?: string;

  /** Дата создания назначения */
  dateCreated?: Date;

  /** Способ оплаты назначения */
  fundingSourceName?: string;

  /**  */
  createdUserFullName?: PersonNameModel;

  /** Номер заказа */
  probeOrderId?: number;

  /** Внешняя лаборатория */
  externalLabName?: string;

  /** Режим забора биоматериала
Если true - для забора биоматериала достаточно будет только проставить статус
Если false - требуется указание пробирок */
  isSimpleTakingMode?: boolean;

  /**  */
  prescriptionStatus?: PrescriptionStatus;

  /**  */
  commands?: ModelCommands;

  /**  */
  appointment?: AppointmentProbeModel;
}

export interface PrescriptionProcedureMedicineModel {
  /** Идентификатор медикамента */
  id?: number;

  /** Наименование медикамента */
  medicineName?: string;

  /** Количество */
  quantity?: number;

  /** Склад, с которого планируется отпускать медикамент. Если null - то медикамент свой */
  warehouseId?: number;

  /** Название склада, с которого планируется отпускать медикамент. Если null - то медикамент свой */
  warehouseName?: number;
}

export interface PrescriptionProcedureParameterInfoModel {
  /** Идентификатор параметра (сущности справочника) */
  procedureTypeParameterId?: number;

  /** Название параметра */
  parameterName?: string;

  /** Форматированное в строку значение параметра */
  parameterValue?: string;

  /**  */
  parameterType?: ProcedureParameterType;

  /** Список значений (для списков) */
  splittedListValues?: string[];

  /** Обязательный параметр */
  isRequired?: boolean;
}

export interface PrescriptionTreatmentActionModel {
  /**  */
  serviceItemId?: number;

  /** Название лечебного действия */
  serviceItemName?: string;

  /** Количество (не null, если лечебное действие было назначено на листе назначений для услуги) */
  quantity?: number;

  /** Цена до скидки */
  originalPricePerOne?: number;

  /** Конечная цена за все лечебные действия */
  priceTotal?: number;
}

export interface PrintReportFiscalModel {
  /**  */
  type?: FiscalReportType;
}

export interface PrintReportFiscalResponse {
  /**  */
  terminalId?: string;

  /**  */
  checkNo?: number;
}

export interface ProblemDetails {
  /**  */
  type?: string;

  /**  */
  title?: string;

  /**  */
  status?: number;

  /**  */
  detail?: string;

  /**  */
  instance?: string;
}

export interface ProcedureRelease_Command {
  /** id Sanatorium.DataAccess.Models.Facilities.ServicePoint в котором будет отпущена услуга. Указываем, если отпуск без диспетчеризации */
  servicePointId?: number;

  /** Назначения для отпуска */
  releaseItems?: ProcedureRelease_ReleaseItemModel[];

  /** Комментарий к отпуску услуги */
  comment?: string;

  /** Отпускающие специалисты и их роли в команде */
  teamMembers?: ReleaseTeamMemberModel[];

  /** Лечебные действия, используемые при отпуске */
  treatmentActions?: ReleaseTreatmentActionModel[];
}

export interface ProcedureRelease_ReleaseItemModel {
  /** id назначения Sanatorium.DataAccess.Models.MedicalRecords.Prescription */
  prescriptionId?: number;

  /** id диспетчеризации Sanatorium.DataAccess.Models.Dispatching.ScheduleItem */
  scheduleItemId?: number;
}

export interface ProcedureRepetitionTypeModel {
  /**  */
  id?: number;

  /** Название */
  name?: string;
}

export interface PropNode {
  /**  */
  title?: string;

  /**  */
  titlePosition?: string;

  /**  */
  label?: string;

  /**  */
  direction?: string;

  /**  */
  test?: string;

  /**  */
  prefix?: string;

  /**  */
  suffix?: string;

  /**  */
  type?: string;

  /**  */
  validation?: string;

  /**  */
  name?: string;

  /**  */
  id?: string;

  /**  */
  width?: string;

  /**  */
  autoSuggestName?: string;

  /**  */
  classes?: ClassesNode;

  /**  */
  attrs?: AttrsNode;

  /**  */
  options?: Option[];

  /**  */
  rows?: string;

  /**  */
  value?: string;

  /**  */
  minLines?: number;

  /**  */
  maxLines?: number;

  /**  */
  visibleWhen?: string;

  /**  */
  visibleWhenNot?: string;
}

export interface PutCashFiscalResponse {
  /**  */
  terminalId?: string;

  /**  */
  checkNo?: number;
}

export interface ReleaseInfoModel {
  /** Доступные лечебные действия */
  availableTreatmentActions?: PrescriptionTreatmentActionModel[];

  /** Доступные отпускающие роли */
  availableExecutionTeams?: ServiceExecutionTeamMemberModel[];

  /** Доступные для отпуска кабинеты */
  availableServicePoints?: ServicePointModel[];

  /** Доступные сотрудники для отпуска текущей роли */
  availableReleaseEmployees?: EmployeeReleaseModel[];
}

export interface ReleaseTeamMemberModel {
  /** Id роли в команде Sanatorium.DataAccess.Models.Services.ServiceExecutionTeamMember */
  serviceExecutionTeamMemberId?: number;

  /** Id сотрудника, который выступал в этой роли при проведении конкретного приема Sanatorium.DataAccess.Models.Personnel.Employee */
  employeeId?: number;
}

export interface ReleaseTreatmentActionModel {
  /** Id лечебного действия Sanatorium.DataAccess.Models.Services.ServiceItemTreatmentAction */
  serviceItemId?: number;

  /** Количество */
  quantity?: number;

  /** Комментарий */
  comment?: string;

  /** Отпускающие специалисты и их роли в команде */
  appointmentTeamMembers?: ReleaseTeamMemberModel[];
}

export interface ReportCategoryModel {
  /**  */
  name?: string;

  /**  */
  reports?: ReportModel[];
}

export interface ReportModel {
  /**  */
  id?: string;

  /**  */
  name?: string;

  /**  */
  error?: string;

  /**  */
  isDraft?: boolean;

  /**  */
  url?: string;
}

export interface RoomModel {
  /** Идентификатор */
  id?: number;

  /** Название комнаты */
  name?: string;

  /** Название типа комнаты */
  roomTypeName?: string;

  /** Название корпуса */
  locationName?: string;
}

export interface ScheduleGridModel {
  /** Размер одного деления в сетке расписания */
  gridStep?: number;

  /** Время начала работы кабинета. Берется наименьшее время, если расписаний за временной промежуток несколько */
  startWorkingTime?: string;

  /** Время окончания работы кабинета. Берется наибольшее время, если расписаний за временной промежуток несколько */
  endWorkingTime?: string;
}

export interface ScheduleItemDetailedModel {
  /**  */
  id?: number;

  /**  */
  status?: ScheduleItemStatus;

  /** Дата начала */
  date?: Date;

  /** Время начала */
  startTime?: string;

  /** Длительность */
  duration?: number;

  /** Комментарий к резерву */
  comment?: string;

  /**  */
  servicePoint?: ServicePointModel;

  /**  */
  prescriptionId?: number;

  /**  */
  appointment?: AppointmentDetailedModel;
}

export interface ScheduleItemModel {
  /**  */
  id?: number;

  /**  */
  status?: ScheduleItemStatus;

  /** Дата начала */
  date?: Date;

  /** Время начала */
  startTime?: string;

  /** Длительность */
  duration?: number;

  /** Комментарий к резерву */
  comment?: string;

  /**  */
  servicePoint?: ServicePointModel;
}

export interface SearchAttachmentCategories_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Код категории */
  code?: string;
}

export interface SearchAvailablePrintingForms_Model {
  /**  */
  id?: string;

  /**  */
  name?: string;

  /**  */
  fullName?: string;

  /**  */
  isReportSource?: boolean;

  /**  */
  action?: CustomDocumentAction;

  /**  */
  downloadUrl?: string;

  /**  */
  isDraft?: boolean;
}

export interface SearchCountries_Model {
  /**  */
  name?: string;

  /**  */
  id?: number;
}

export interface SearchDiets_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;
}

export interface SearchDocumentTypes_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;

  /**  */
  code?: string;
}

export interface SearchExternalDevices_Model {
  /** Идентификатор */
  id?: number;

  /** Адрес устройства */
  url?: string;

  /** Наименование */
  name?: string;

  /** Онлайн? */
  isOnline?: boolean;

  /** Рабочие станции, на которых возможнои использование устройства */
  workstations?: WorkstationModel[];

  /**  */
  dateDeleted?: Date;

  /**  */
  isActive?: boolean;
}

export interface SearchExternalLabs_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Код лаборатории */
  code?: string;
}

export interface SearchFiles_Model {
  /** Ключ объекта */
  key?: string;

  /** Отображаемое имя файла */
  displayName?: string;

  /** Размер файла */
  size?: number;

  /** Тип объекта */
  contentType?: string;

  /** Расширение файла */
  extension?: string;

  /** Хэш сумма объекта */
  hash?: string;

  /** Идентификатор пользователя, сохранившего файл */
  userCreatedId?: number;

  /**  */
  userCreated?: PersonNameModel;

  /** Дата создания */
  dateCreated?: Date;

  /** Дата удаления */
  dateDeleted?: Date;

  /**  */
  category?: SearchAttachmentCategories_Model;

  /** Комментарий */
  description?: string;

  /** Требуется подпись файла */
  requiresSignature?: boolean;

  /** Файл подписан электронной подписью */
  isSigned?: boolean;

  /** Требуемые подписи */
  requiredSignatures?: SearchFiles_RequiredSignatureModel[];
}

export interface SearchFiles_RequiredSignatureModel {
  /**  */
  role?: SignerRole;

  /** Подписал */
  isSigned?: boolean;

  /**  */
  canSign?: CommandInfoModel;
}

export interface SearchForms_Model {
  /**  */
  name?: string;

  /**  */
  id?: number;
}

export interface SearchIcdItemContraindications_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;
}

export interface SearchIcdItemServiceItems_Model {
  /**  */
  serviceItemId?: number;

  /** Название услуги */
  serviceItemName?: string;

  /** Родительская услуга */
  isFolder?: boolean;

  /** Дочерние услуги */
  children?: SearchIcdItemServiceItems_Model[];

  /** Стоимость услуги */
  serviceItemPrice?: number;
}

export interface SearchImageRadiationImpacts_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Лучевое воздействие (мЗв) */
  radiationAmount?: number;
}

export interface SearchInsurancePolicyTypes_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;
}

export interface SearchMedicalExaminationRadiationImpact_Model {
  /**  */
  id?: number;

  /** Наименование снимка */
  imageName?: string;

  /** Лучевое воздействие (мЗв) */
  radiationAmount?: number;
}

export interface SearchMedicalExaminationTreatmentActions_Model {
  /**  */
  id?: number;

  /** Название лечебного действия */
  treatmentActionName?: string;

  /** Количество */
  quantity?: number;

  /** Цена за ед. */
  pricePerOne?: number;

  /** Общая сумма со скидкой */
  totalPrice?: number;

  /**  */
  userInitiator?: PersonNameModel;

  /** Комментарий */
  comment?: string;

  /** Отпускающие роли со специалистами, если они указаны в ней */
  releaseTeamMembers?: SearchMedicalExaminationTreatmentActions_ReleaseTeamMemberModel[];
}

export interface SearchMedicalExaminationTreatmentActions_ReleaseTeamMemberModel {
  /**  */
  id?: number;

  /** Id роли в команде */
  serviceExecutionTeamMemberId?: number;

  /** Название роли */
  serviceExecutionTeamMemberName?: string;

  /**  */
  employee?: EmployeeModel;
}

export interface SearchMedicalOrganizations_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;
}

export interface SearchMedicineIntakeMethods_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Времена приема */
  takeTimes?: string;
}

export interface SearchMedicines_Model {
  /** Идентификатор медикамента */
  id?: number;

  /** Полное название */
  name?: string;

  /** Латинское название */
  latinName?: string;

  /** Международное непатентованное наименование */
  internationalName?: string;

  /** Единицы назначения - таблетки, капли, мл, может быть пустым, если это мазь, например */
  assignmentUnit?: string;

  /** Фармакотерапевтическая группа */
  farmGroup?: string;

  /** Ед. отпуска */
  releaseUnit?: string;

  /** Форма выпуска */
  releaseForm?: string;
}

export interface SearchMedicinesStock_MedicineStockModel {
  /** Оставшиеся кол-во на складе */
  remainingUnits?: number;

  /** Ссылка на склад */
  warehouseId?: number;

  /** Название склада */
  warehouseName?: string;
}

export interface SearchMedicinesStock_Model {
  /**  */
  id?: number;

  /** Полное название */
  name?: string;

  /** Латинское название */
  latinName?: string;

  /** Международное непатентованное наименование */
  internationalName?: string;

  /** Единицы назначения - таблетки, капли, мл, может быть пустым, если это мазь, например */
  assignmentUnit?: string;

  /** Фармакотерапевтическая группа */
  farmGroup?: string;

  /** Остатки на складах */
  medicineStock?: SearchMedicinesStock_MedicineStockModel[];

  /** Ед. отпуска */
  releaseUnit?: string;

  /** Форма выпуска */
  releaseForm?: string;
}

export interface SearchMyDispatchedConsultations_ConsultationDispatchingModel {
  /** Дата начала */
  date?: Date;

  /** Время начала */
  startTime?: string;

  /** Название услуги */
  serviceItemName?: string;

  /** Название кабинета */
  servicePointName?: string;

  /**  */
  status?: ScheduleItemStatus;
}

export interface SearchMyDispatchedConsultations_Model {
  /**  */
  consultationDispatching?: SearchMyDispatchedConsultations_ConsultationDispatchingModel;

  /**  */
  treatmentCase?: TreatmentCaseModel;
}

export interface SearchMyServicePoints_Model {
  /**  */
  id?: number;

  /** Поиск по названию в МКБ */
  name?: string;

  /**  */
  isActive?: boolean;

  /** Дочерние элементы */
  children?: SearchMyServicePoints_Model[];

  /** Количество дочерних узлов (у которых этот узел является непосредственным родителем) */
  childrenCount?: number;

  /**  */
  dateDeleted?: Date;

  /** Название кабинета в расписании, если не задано, то использовать Name */
  scheduleName?: string;

  /** Название рабочего места (Name + WorkplaceName уникально) */
  workplaceName?: string;
}

export interface SearchNotifications_Model {
  /** Идентификатор оповещения */
  id?: number;

  /** Дата создания */
  dateCreated?: Date;

  /**  */
  severity?: NotificationSeverityLevel;

  /** Описание */
  description?: string;

  /** Дата прочтения */
  readDate?: Date;

  /** Тип */
  notificationType?: string;

  /**  */
  patientInfo?: PatientModel;

  /**  */
  notificationNavigation?: SearchNotifications_NotificationNavigationModel;
}

export interface SearchNotifications_NotificationNavigationModel {
  /** Идентификатор лечебного случая */
  treatmentCaseId?: number;

  /** Идентификатор назначения */
  prescriptionId?: number;
}

export interface SearchPatientProfiles_Model {
  /** Идентификатор */
  id?: number;

  /**  */
  patient?: GetTitlePage_PatientModel;
}

export interface SearchPrescriptionMedicinesForRelease_Model {
  /** Идентификатор назначения */
  id?: number;

  /** Кол-во отпущенных */
  releasedCount?: number;

  /** Общее кол-во */
  quantity?: number;

  /** Дата начала приема медикамента */
  startDate?: Date;

  /** Дата окончания приема медикамента */
  endDate?: Date;

  /** Название назначения */
  name?: string;

  /** Единицы отпуска */
  releaseUnit?: string;

  /**  */
  patient?: MedicalRecordModel;
}

export interface SearchPrescriptionsForDispatch_PrescriptionDetailedModel {
  /** Название услуги */
  serviceItemName?: string;

  /** Количество диспетчеризованных назначений */
  dispatchedCount?: number;

  /** Общее количество диспетчеризаций */
  quantity?: number;

  /** Cito! отметка */
  isCito?: boolean;

  /**  */
  id?: number;

  /**  */
  prescriptionType?: PrescriptionType;

  /** Полностью ли диспетчеризовано назначение */
  isDispatchComplete?: boolean;

  /** Код способа оплаты */
  fundingSourceCode?: string;

  /** Название способа оплаты */
  fundingSourceName?: string;

  /** Кратность отпуска (для процедур) */
  repetitionType?: string;

  /** Кол-во оплаченных услуг в назначении */
  paidQuantity?: number;
}

export interface SearchProcedureRepetitionTypes_Model {
  /**  */
  name?: string;

  /**  */
  id?: number;
}

export interface SearchProcedures_Model {
  /**  */
  prescription?: SearchProcedures_PrescriptionProcedureModel;

  /**  */
  prescriptionGroup?: SearchProcedures_PrescriptionGroupModel;
}

export interface SearchProcedures_PrescriptionGroupModel {
  /** Время начала групповой ячейки */
  startTime?: string;

  /** Заголовок группы */
  groupTitle?: string;

  /** Назначения */
  prescriptions?: SearchProcedures_PrescriptionProcedureModel[];
}

export interface SearchProcedures_PrescriptionProcedureModel {
  /**  */
  medicalRecord?: MedicalRecordModel;

  /**  */
  prescription?: PrescriptionModel;

  /**  */
  scheduleItem?: ScheduleItemModel;

  /**  */
  appointment?: AppointmentModel;

  /** Оплачена ли услуга или следующий отпуск */
  isPaid?: boolean;
}

export interface SearchRegistrationInfo_Model {
  /** Идентификатор */
  id?: number;

  /** Номер ИБ */
  recordNo?: string;

  /** Внешний ID */
  externalId?: string;

  /**  */
  patientName?: PersonNameModel;

  /** Дата рождения */
  birthDate?: Date;

  /** Возраст */
  age?: number;

  /** Комната */
  roomNo?: string;

  /** Место работы */
  workPlace?: string;

  /** Должность */
  workPosition?: string;

  /**  */
  address?: GetTitlePage_AddressModel;

  /** Место отбора */
  medicalOrganizationName?: string;

  /**  */
  doctorFullName?: PersonNameModel;

  /**  */
  wardNurseFullName?: PersonNameModel;

  /** Программа */
  sanatoriumProgramName?: string;

  /** Дата приезда */
  treatmentKnownStartDate?: Date;

  /** Дата отъезда */
  treatmentKnownEndDate?: Date;

  /** Тэги ИБ */
  medicalRecordTags?: TagDefinitionModel[];

  /**  */
  status?: TreatmentCaseStatus;

  /**  */
  sex?: Sex;
}

export interface SearchReusableText_Model {
  /**  */
  id?: number;

  /** Текст */
  text?: string;

  /** Публичный ли шаблон */
  isPublic?: boolean;

  /** Относительная частота использования в процентах */
  usageFrequency?: number;

  /**  */
  usageCounter?: number;
}

export interface SearchRoles_Model {
  /**  */
  id?: number;

  /**  */
  name?: string;
}

export interface SearchRooms_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Название типа комнаты */
  roomTypeName?: string;

  /** Название корпуса */
  locationName?: string;
}

export interface SearchServicePointsForDispatch_Model {
  /** Идентификатор кабинета */
  servicePointId?: number;

  /** Название кабинета */
  servicePointName?: string;

  /** Название кабинета в расписании, если не задано, то использовать Name */
  scheduleName?: string;

  /** Название рабочего места (Name + WorkplaceName уникально) */
  workplaceName?: string;
}

export interface SearchSocialStatuses_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;
}

export interface SearchSpecialMarks_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Код */
  code?: string;
}

export interface SearchTransactionCodes_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Код транзакции */
  code?: string;

  /** Доходная ли транзакция */
  isRevenue?: boolean;

  /**  */
  paymentKind?: PaymentKind;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Активно */
  isActive?: boolean;
}

export interface SearchTreatmentCaseChanges_Model {
  /** Дата изменения */
  dateTime?: Date;

  /** Описание изменения */
  description?: string;

  /**  */
  userFullName?: SearchTreatmentCaseChanges_UserPersonNameModel;
}

export interface SearchTreatmentCaseChanges_UserPersonNameModel {
  /** Имя */
  firstName?: string;

  /** Фамилия */
  lastName?: string;

  /** Отчество */
  middleName?: string;

  /** Обращение к человеку */
  title?: string;

  /**  */
  id?: number;
}

export interface SearchTreatmentCaseDiets_Model {
  /**  */
  id?: number;

  /**  */
  diet?: SearchDiets_Model;

  /**  */
  startDate?: Date;

  /**  */
  endDate?: Date;

  /**  */
  dateCreated?: Date;

  /**  */
  userCreatedFullName?: PersonNameModel;

  /**  */
  canEdit?: CommandInfoModel;

  /**  */
  canDelete?: CommandInfoModel;
}

export interface SearchTreatmentCaseFoodAllergens_Model {
  /**  */
  id?: number;

  /**  */
  name?: string;
}

export interface SearchTreatmentCaseNutritionExtras_Model {
  /**  */
  id?: number;

  /**  */
  startDate?: Date;

  /**  */
  endDate?: Date;

  /**  */
  exemptionType?: NutritionExemptionType;

  /**  */
  nutritionText?: string;

  /**  */
  dateCreated?: Date;

  /**  */
  userCreatedFullName?: PersonNameModel;

  /**  */
  canEdit?: CommandInfoModel;
}

export interface SearchTreatmentCaseProgramServiceItems_Model {
  /** Идентификатор TreatmentCaseTreatmentProgram */
  id?: number;

  /** Идентификатор лечебной программы */
  treatmentProgramId?: number;

  /** Имя лечебной программы */
  treatmentProgramName?: string;

  /** Дата начала лечебной программы */
  startDate?: Date;

  /** Дата окончания лечебной программы */
  endDate?: Date;

  /** Услуги, которые можно назначить для лечебной программы */
  serviceItems?: SearchTreatmentProgramServiceItems_ServiceItemTreatmentProgramsModel[];
}

export interface SearchTreatmentCases_Model {
  /** Идентификатор */
  id?: number;

  /** Номер ИБ */
  recordNo?: string;

  /**  */
  patientName?: PersonNameModel;

  /** Дата рождения */
  birthDate?: Date;

  /** Возраст */
  age?: number;

  /** Номер комнаты проживания */
  roomNo?: string;

  /** Название санаторной программы */
  sanatoriumProgramName?: string;

  /** Основной диагноз */
  mainDiagnosis?: string;

  /**  */
  doctorFullName?: PersonNameModel;

  /**  */
  wardNurseFullName?: PersonNameModel;

  /** Дата заезда\/начала лечения */
  treatmentStartDate?: Date;

  /** Дата выезда\/окончания лечения */
  treatmentEndDate?: Date;

  /** Тэги ИБ */
  medicalRecordTags?: TagDefinitionModel[];

  /** Имя с инциалами */
  patientFullNameWithInitials?: string;
}

export interface SearchTreatmentCasesForDispatch_Model {
  /**  */
  treatmentCase?: SearchTreatmentCasesForDispatch_TreatmentCaseModel;

  /** Назначения */
  prescriptions?: SearchTreatmentCasesForDispatch_PrescriptionModel[];
}

export interface SearchTreatmentCasesForDispatch_PrescriptionModel {
  /** Название услуги */
  serviceItemName?: string;

  /** Количество диспетчеризованных назначений */
  dispatchedCount?: number;

  /** Общее количество диспетчеризаций */
  quantity?: number;

  /** Cito! отметка */
  isCito?: boolean;
}

export interface SearchTreatmentCasesForDispatch_TreatmentCaseModel {
  /** Идентификатор лечебного случая */
  id?: number;

  /** Номер ИБ */
  recordNo?: string;

  /**  */
  fullName?: PersonNameModel;

  /** Имя комнаты, в которой проживает пациент */
  roomNo?: string;

  /** Имя корпуса комнаты */
  locationName?: string;

  /** Дата рождения */
  birthDate?: Date;

  /** Возраст */
  age?: number;

  /** Дата заезда */
  arrivalDate?: Date;

  /** Дата выезда */
  departureDate?: Date;

  /** Имя санаторной программы пациента */
  programName?: string;

  /** Тэги ИБ */
  medicalRecordTags?: TagDefinitionModel[];
}

export interface SearchTreatmentIndications_Model {
  /** Идентификатор */
  id?: number;

  /** Наименование */
  name?: string;
}

export interface SearchTreatmentModes_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;
}

export interface SearchTreatmentProgramServiceItems_ServiceItemTreatmentProgramsModel {
  /**  */
  id?: number;

  /** Поиск по названию в МКБ */
  name?: string;

  /**  */
  isActive?: boolean;

  /** Дочерние элементы */
  children?: SearchTreatmentProgramServiceItems_ServiceItemTreatmentProgramsModel[];

  /** Количество дочерних узлов (у которых этот узел является непосредственным родителем) */
  childrenCount?: number;

  /**  */
  dateDeleted?: Date;

  /** Является ли группой */
  isFolder?: boolean;

  /** Поиск по коду */
  code?: string;
}

export interface SearchTreatmentPrograms_Model {
  /**  */
  id?: number;

  /** Название */
  name?: string;

  /** Сортировка */
  sortOrder?: number;

  /** Активно */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Код программы */
  code?: string;

  /** Фиксированная длительность программы (в днях) */
  durationDays?: number;
}

export interface ServiceExecutionTeamMemberModel {
  /**  */
  id?: number;

  /** Название роли в команде */
  name?: string;

  /**  */
  teamRole?: ServiceTeamRole;
}

export interface ServiceItemModel {
  /**  */
  id?: number;

  /** Поиск по названию в МКБ */
  name?: string;

  /**  */
  isActive?: boolean;

  /** Дочерние элементы */
  children?: ServiceItemModel[];

  /** Количество дочерних узлов (у которых этот узел является непосредственным родителем) */
  childrenCount?: number;

  /**  */
  dateDeleted?: Date;

  /** Является ли группой */
  isFolder?: boolean;

  /** Поиск по коду */
  code?: string;

  /** Является ли услуга составной */
  isComposite?: boolean;

  /** Есть ли услуги базовый состав */
  hasBasicComposition?: boolean;
}

export interface ServicePointModel {
  /** Идентификатор */
  id?: number;

  /** Название кабинета */
  name?: string;

  /** Название рабочего места */
  workplaceName?: string;
}

export interface SetCito_Command {
  /** Ссылки на назначения */
  prescriptionIds?: number[];

  /** Признак Cito */
  isCito?: boolean;
}

export interface SetFieldValuesCommand {
  /**  */
  ownerId?: string;

  /**  */
  fieldValues?: FieldValueSetModel[];
}

export interface SetFundingSource_Command {
  /** Ссылка на назначение */
  prescriptionId?: number;

  /** Признак Cito */
  fundingSourceId?: number;

  /** Лечебная программа */
  treatmentCaseTreatmentProgramId?: number;
}

export interface SetLabTestData_CompositeProbeResultModel {
  /** Идентификатор */
  id?: number;

  /** Значение показателя */
  result?: string;

  /** Индикатор патология\/нет */
  isPathology?: boolean;

  /** Комментарий */
  comment?: string;
}

export interface SetLabTestData_Model {
  /**  */
  genericResult?: GenericExaminationResult;

  /** Общее количество патологий
Вносится вручную и может отличаться от суммы патологий показателей исследования */
  pathologyCount?: number;

  /** Коллекция показателей для изменения значений лаб исследования
Обновлены будут только те показатели, которые будут перечисленны в коллекции */
  updateModels?: SetLabTestData_CompositeProbeResultModel[];
}

export interface SetLabTestTeamMembers_Command {
  /** Идентификатор лабораторного приёма */
  medicalExaminationId?: number;

  /** Отпускающие специалисты и их роли в команде */
  teamMembers?: ReleaseTeamMemberModel[];
}

export interface SetMedicalExaminationValueModel {
  /** Ключ */
  key?: string;

  /** Значение */
  value?: string;
}

export interface SetMedicalRecordTagsModel {
  /** Идентификаторы выбранных тегов на добавление */
  tagDefinitionIds?: number[];
}

export interface SetMissed_Command {
  /** Id диспетчеризации услуги */
  scheduleItemIds?: number[];
}

export interface SetNutritionComment_Command {
  /**  */
  treatmentCaseId?: number;

  /**  */
  nutritionComment?: string;
}

export interface SetRole_Model {
  /**  */
  name?: string;
}

export interface SetServicePoint_Command {
  /** Идентификатор консультативного приёма */
  medicalExaminationId?: number;

  /** Идентификатор кабинета */
  servicePointId?: number;

  /** Дата начала консультативного приёма. Указываем, если требуется указать время отличное от фактического начала */
  consultationStartDate?: Date;

  /** Время начала консультативного приёма. Указываем, если требуется указать время отличное от фактического начала */
  consultationStartTime?: string;
}

export interface SetTeamMembers_Command {
  /** Идентификатор консультативного приёма */
  medicalExaminationId?: number;

  /** Отпускающие специалисты и их роли в команде */
  teamMembers?: ReleaseTeamMemberModel[];
}

export interface SetTitlePage_AddressUpdateModel {
  /** Идентификатор */
  id?: number;

  /** Идентификатор страны */
  countryId?: number;

  /** Область */
  region?: string;

  /** Район */
  district?: string;

  /** Тип населенного пункта */
  settlementType?: string;

  /** Название населенного пункта */
  city?: string;

  /** Улица */
  street?: string;

  /** Номер дома */
  houseNo?: string;

  /** Номер строения */
  buildingNo?: string;

  /** Квартира */
  flatNo?: string;
}

export interface SetTitlePage_DiagnosisModel {
  /** Идентификатор */
  id?: number;

  /** Ссылка на болезнь из МКБ */
  icdItemId?: number;

  /** Клинический диагноз */
  clinicalDiagnosis?: string;

  /** Основной диагноз */
  isMain?: boolean;

  /** Осложнение основного заболевания */
  isComplication?: boolean;

  /** Выявлен ли впервые */
  isFirstTime?: boolean;
}

export interface SetTitlePage_DocumentDataUpdateModel {
  /** Идентификатор */
  id?: number;

  /** Идентификатор типа документа */
  documentTypeId?: number;

  /** Идентификатор страны выдачи */
  issuerCountryId?: number;

  /** Серия */
  documentSeries?: string;

  /** Номер */
  documentNumber?: string;

  /** Дата выдачи */
  issueDate?: Date;

  /** Кем выдано */
  issuerInfo?: string;

  /** Код подразделения */
  issuerAuthorityCode?: string;

  /** Срок действия */
  expirationDate?: Date;
}

export interface SetTitlePage_InsurancePolicyUpdateModel {
  /** Идентификатор */
  id?: number;

  /** Идентификатор вида полиса */
  insurancePolicyTypeId?: number;

  /** Серия */
  series?: string;

  /** Номер полиса */
  number?: string;

  /** Название страховой компании */
  companyName?: string;
}

export interface SetTitlePage_Model {
  /**  */
  medicalRecordType?: MedicalRecordType;

  /**  */
  patient?: SetTitlePage_PatientUpdateModel;

  /** Плановая дата заезда из направления на лечение (путевки) - если есть */
  planStartDate?: Date;

  /** Плановое время заезда */
  planStartTime?: string;

  /** Плановая дата выезда из направления на лечение (путевки) - если есть */
  planEndDate?: Date;

  /** Плановое время выезда */
  planEndTime?: string;

  /** Фактическоая дата заезда */
  startDate?: Date;

  /** Фактическое время заезда */
  startTime?: string;

  /** Фактическая дата выезда */
  endDate?: Date;

  /** Фактическое время выезда */
  endTime?: string;

  /** Идентификатор режима лечения */
  treatmentModeId?: number;

  /** Диагнозы, являющиеся причиной к установке режима лечения */
  treatmentModeDiagnosisIds?: number[];

  /** Особые указания к режиму лечения */
  treatmentModeComment?: string;

  /** Идентификатор на комнату, может отсутствовать, если комната гостю не назначена */
  roomId?: number;

  /** Идентификатор типа комнаты */
  roomTypeId?: number;

  /** Идентификатор на актуального лечащего врача */
  doctorId?: number;

  /** Идентификатор на актуальную палатную сестру */
  nurseId?: number;

  /** Идентификатор текущей основной программы */
  mainTreatmentProgramId?: number;

  /** Диагнозы */
  diagnosis?: SetTitlePage_DiagnosisModel[];

  /** Идентификатор показанности к лечению */
  treatmentIndicationId?: number;

  /** Диагнозы, являющиеся причиной к установке показанности к лечению */
  treatmentIndicationDiagnosisIds?: number[];

  /** Комментарий к показанности к лечению */
  treatmentIndicationComment?: string;

  /** Комментарий */
  comment?: string;

  /** Идентификатор отделения в санатории, к которому относится лечебный случай */
  organizationUnitId?: number;

  /** Лечебные программы. Если пользователь не имеет права добавлять\/изменять ЛП, то ставить null */
  treatmentPrograms?: CreateUpdateTreatmentProgram_TreatmentCaseTreatmentProgramModel[];

  /** Идентификатор профиля */
  patientProfileId?: number;

  /** Место отбора */
  medicalOrganizationId?: number;

  /** Обновление особых отметок Sanatorium.DataAccess.Models.MedicalRecords.MedicalRecordSpecialMark. Если есть реальные изменения, происходит обновление Sanatorium.DataAccess.Models.MedicalRecords.PatientSpecialMark */
  specialMarks?: SetTitlePage_SpecialMarkUpdateModel[];

  /** Значения полей форм */
  formFieldValues?: FieldValueSetModel[];
}

export interface SetTitlePage_PatientPhoneUpdateModel {
  /** Идентификатор */
  id?: number;

  /** Название (Тип номера) */
  name?: string;

  /** Номер телефона */
  phoneNumber?: string;

  /** Признак "Основной" */
  isMain?: boolean;
}

export interface SetTitlePage_PatientUpdateModel {
  /** Идентификатор */
  id?: number;

  /** Фамилия */
  lastName?: string;

  /** Имя */
  firstName?: string;

  /** Отчество */
  middleName?: string;

  /** Обращение (имя, под которым пациент хочет чтобы к нему обращались) */
  title?: string;

  /**  */
  sex?: Sex;

  /** День рождения */
  birthDate?: Date;

  /** Email */
  email?: string;

  /** Телефоны пациента\/родственников */
  phones?: SetTitlePage_PatientPhoneUpdateModel[];

  /** Место работы */
  workPlace?: string;

  /** Должность */
  workPosition?: string;

  /** Идентификатор предпочитаемого языка */
  languageId?: number;

  /**  */
  address?: SetTitlePage_AddressUpdateModel;

  /**  */
  documentData?: SetTitlePage_DocumentDataUpdateModel;

  /** СНИЛС */
  snils?: string;

  /**  */
  insurancePolicy?: SetTitlePage_InsurancePolicyUpdateModel;

  /** Социальное положение */
  socialStatusId?: number;
}

export interface SetTitlePage_SpecialMarkUpdateModel {
  /** Идентификатор Sanatorium.DataAccess.Models.MedicalRecords.MedicalRecordSpecialMark */
  id?: number;

  /** Идентификатор особой отметки */
  specialMarkId?: number;

  /** Значение */
  value?: string;
}

export interface SingleTokenModel {
  /**  */
  token?: string;
}

export interface StartMedicalExamination_Command {
  /** Идентификатор лечебного случая */
  treatmentCaseId?: number;

  /** Старт приема по назначению. Если указано, то ServiceItemId должен быть null */
  prescriptionId?: number;

  /** Старт приема по услуге. Если указано, то PrescriptionId должен быть null */
  serviceItemId?: number;
}

export interface SubAccountModel {
  /** Идентификатор */
  id?: number;

  /** Наименование */
  name?: string;

  /**  */
  balance?: BalanceModel;

  /** Идентификатор справочника кармана */
  defaultSubAccountId?: number;
}

export interface TagDefinitionModel {
  /** Идентификатор */
  id?: number;

  /** Название тега */
  name?: string;

  /** Код тега (то что отображается в списках) */
  code?: string;

  /** Цвет плашки с тегом в формате #AARRGGBB */
  color?: string;
}

export interface TakeCashFiscalResponse {
  /**  */
  terminalId?: string;

  /**  */
  checkNo?: number;
}

export interface TestPinPadResponse {}

export interface TocNode_GetTreatmentCaseToc_ConsultationTocNode {
  /** Название */
  name?: string;

  /** Дочерние узлы */
  child?: GetTreatmentCaseToc_ConsultationTocNode[];
}

export interface TocNode_GetTreatmentCaseToc_FormTocNode {
  /** Название */
  name?: string;

  /** Дочерние узлы */
  child?: GetTreatmentCaseToc_FormTocNode[];
}

export interface TocNode_GetTreatmentCaseToc_LinkAnchor {
  /** Название */
  name?: string;

  /** Дочерние узлы */
  child?: GetTreatmentCaseToc_LinkAnchor[];
}

export interface TocNode_GetTreatmentCaseToc_RelatedTreatmentCaseTocNode {
  /** Название */
  name?: string;

  /** Дочерние узлы */
  child?: GetTreatmentCaseToc_RelatedTreatmentCaseTocNode[];
}

export interface TokenModel {
  /**  */
  access?: string;

  /**  */
  refresh?: string;
}

export interface TransactionCodeModel {
  /** Идентификатор */
  id?: number;

  /** Код транзакции */
  code?: string;

  /** Доходная ли транзакция */
  isRevenue?: boolean;

  /** Транзакция фискализируется как аванс */
  isAdvance?: boolean;

  /** Требуется ли фискализация */
  isFiscalizationRequired?: boolean;
}

export interface TransactionModel {
  /** Идентификатор */
  id?: number;

  /** Наименование */
  name?: string;

  /** Идентификатор кармана аккаунта плательщика */
  subAccountId?: number;

  /** Количество */
  quantity?: number;

  /** Стоимость до применения скидки */
  amountBeforeDiscount?: number;

  /** Скидка в процентах */
  discount?: number;

  /** Стоимость */
  amount?: number;

  /**  */
  transactionCode?: TransactionCodeModel;

  /**  */
  status?: TransactionStatus;

  /**  */
  fiscalState?: FiscalState;

  /** Оплачена ли транзакция */
  isPaid?: boolean;

  /** Дата начисления */
  datePosted?: Date;

  /** Дата создания */
  dateCreated?: Date;

  /** Дата планирования к начислению */
  dateScheduled?: Date;

  /** Владелец транзакции в формате {код_системы}:{id_сущности} */
  ownerId?: string;

  /** Код источника начисления транзакции в формате {код_системы}:{id_сущности} */
  postingSourceId?: string;

  /** Иерархический код транзакции
например: OwnerId + PostingSourceId в формате: {код_системы}:{id_сущности_владельца}:{id_сущности_источника_начисления} */
  materializedPath?: string;

  /** Идентификатор пользователя, проводившего операцию */
  userCreatedId?: number;

  /** Идентификатор счета */
  invoiceId?: number;

  /** Транзакция коррекция или скорректирована */
  isCorrected?: boolean;

  /** Величина включённого в стоимость налога */
  includedTaxAmount?: number;

  /** Код налога */
  taxCode?: string;
}

export interface TreatmentCaseModel {
  /** Идентификатор лечебного случая */
  id?: number;

  /** Номер ИБ */
  recordNo?: string;

  /**  */
  patientFullName?: PersonNameModel;

  /** Дата рождения */
  birthDate?: Date;

  /** Возраст */
  age?: number;

  /** Номер комнаты проживания */
  roomNo?: string;

  /** Название санаторной программы */
  sanatoriumProgramName?: string;

  /** Основной диагноз */
  mainDiagnosis?: string;

  /** Дата заезда\/начала лечения */
  treatmentStartDate?: Date;

  /** Дата выезда\/окончания лечения */
  treatmentEndDate?: Date;

  /** Внешний ID */
  externalId?: string;

  /**  */
  status?: TreatmentCaseStatus;

  /** Есть начатые приемы */
  hasStartedExamination?: boolean;

  /** Тэги ИБ */
  medicalRecordTags?: TagDefinitionModel[];
}

export interface TreatmentCaseNutritionModel {
  /**  */
  diets?: CommandedArray_SearchTreatmentCaseDiets_Model;

  /**  */
  extras?: CommandedArray_SearchTreatmentCaseNutritionExtras_Model;

  /** Коммментарий к питанию */
  comment?: string;
}

export interface TreatmentCaseTreatmentProgramShortModel {
  /** Идентификатор */
  id?: number;

  /** Идентификатор лечебной программы */
  treatmentProgramId?: number;

  /** Наименование */
  name?: string;
}

export interface TreatmentProgramModel {
  /** Идентификатор */
  id?: number;

  /** Наименование */
  name?: string;
}

export interface TreeDictionaryModel {
  /**  */
  id?: number;

  /** Поиск по названию в МКБ */
  name?: string;

  /**  */
  isActive?: boolean;

  /** Дочерние элементы */
  children?: TreeDictionaryModel[];

  /** Количество дочерних узлов (у которых этот узел является непосредственным родителем) */
  childrenCount?: number;

  /**  */
  dateDeleted?: Date;

  /** Поиск по коду */
  code?: string;
}

export interface TreeSearchServiceItems_Model {
  /** Id */
  id?: number;

  /** Id родителя */
  parentId?: number;

  /** Дети */
  children?: TreeSearchServiceItems_Model[];

  /** Есть ли дети */
  hasChildren?: boolean;

  /** Название */
  name?: string;

  /** Активен ли элемент */
  isActive?: boolean;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Является ли группой */
  isFolder?: boolean;

  /** Поиск по коду */
  code?: string;

  /** Является ли услуга составной */
  isComposite?: boolean;

  /** Есть ли услуги базовый состав */
  hasBasicComposition?: boolean;
}

export interface UpdateDiagnosis_Model {
  /** Описание диагноза */
  clinicalDiagnosis?: string;

  /** Впервые выявлен */
  isFirstTime?: boolean;
}

export interface UpdateExaminationRadiationImpact_Model {
  /** Наименование снимка */
  imageName?: string;

  /** Лучевое воздействие (мЗв) */
  radiationAmount?: number;
}

export interface UpdateExaminationTreatmentAction_ExecutionTeamMemberModel {
  /**  */
  id?: number;

  /** Ссылка на роль исполнителя */
  serviceExecutionTeamMemberId?: number;

  /** Ссылка на сотрудника */
  employeeId?: number;
}

export interface UpdateExaminationTreatmentAction_Model {
  /** Количество */
  quantity?: number;

  /** Комментарий */
  comment?: string;

  /** Исполнители лечебного действия и их роли */
  executionTeamMembers?: UpdateExaminationTreatmentAction_ExecutionTeamMemberModel[];
}

export interface UpdateFileMetadata_Command {
  /** Ключ файла */
  key?: string;

  /** Имя файла */
  name?: string;

  /** Комментарий */
  description?: string;
}

export interface UpdatePrescriptionProcedure_PrescriptionProcedureMedicineUpdateModel {
  /** Идентификатор сущности */
  id?: number;

  /** Идентификатор медикамента */
  medicineId?: number;

  /** Количество */
  quantity?: number;

  /** Склад, с которого планируется отпускать медикамент. Если null - то медикамент свой */
  warehouseId?: number;

  /**  */
  medicineCreateModel?: CreatePrescriptionMedicine_MedicineCreateModel;
}

export interface UpdatePrescriptionProcedure_PrescriptionProcedureParameterUpdateModel {
  /** Идентификатор параметра (сущности справочника) */
  procedureTypeParameterId?: number;

  /** Форматированное в строку значение параметра */
  parameterValue?: string;
}

export interface UpdatePrescriptionProcedure_PrescriptionProcedureUpdateModel {
  /** Количество. Необходимо заполнить, если AutoCalculateQuantity = false */
  quantity?: number;

  /** Автоматически рассчитывать количество (на весь срок лечения, либо срок лечебной программы) */
  autoCalculateQuantity?: boolean;

  /** Длительность процедуры в минутах */
  duration?: number;

  /** Идентификатор периодичности отпуска */
  procedureRepetitionTypeId?: number;

  /** Дата начала отпуска */
  startDate?: Date;

  /** Особые указания */
  specialInstructions?: string;

  /** Параметры отпуска процедуры */
  parameters?: UpdatePrescriptionProcedure_PrescriptionProcedureParameterUpdateModel[];

  /** Медикаменты */
  medicines?: UpdatePrescriptionProcedure_PrescriptionProcedureMedicineUpdateModel[];

  /** Используемые части тела. Если схема применения не задана - null */
  bodyPartIds?: number[];
}

export interface UpdateScheduleItem_Command {
  /** Новые диспетчеризации */
  scheduleItems?: UpdateScheduleItem_Model[];

  /** Хэш конфликтов, которые следует проигнорировать
(сработает только для тех конфликтов, которые специалист имеет право игнорировать) */
  ignoreConflicts?: number[];
}

export interface UpdateScheduleItem_Model {
  /** Идентификатор диспетчеризации */
  scheduleItemId?: number;

  /** Дата диспетчеризации */
  date?: Date;

  /** Время с которого начать отпуск услуги */
  startTime?: string;

  /** Идентификатор кабинета */
  servicePointId?: number;
}

export interface UpdatedPrescriptionMedicineModel {
  /**  */
  model?: GetPrescriptionList_PrescriptionMedicineModel;

  /**  */
  detailedEditableModel?: GetPrescriptionMedicineDetailed_EditableModel;
}

export interface UpdatedPrescriptionProcedureModel {
  /**  */
  model?: GetPrescriptionList_ProcedurePrescriptionModel;

  /**  */
  detailedModel?: GetPrescriptionProcedureDetailed_Model;
}

export interface WarehouseModel {
  /**  */
  id?: number;

  /**  */
  name?: string;
}

export interface WorkstationModel {
  /** Идентификатор */
  id?: number;

  /** Наимменование */
  name?: string;

  /** Адрес рабочей станции */
  address?: string;

  /** Комментарий */
  comment?: string;

  /** Дата удаления */
  dateDeleted?: Date;

  /** Активно */
  isActive?: boolean;
}

export enum AccountStatus {
  'Open' = 'Open',
  'PendingClose' = 'PendingClose',
  'Closed' = 'Closed'
}

export enum AppointmentStatus {
  'Created' = 'Created',
  'PatientOmitted' = 'PatientOmitted',
  'Started' = 'Started',
  'CompletionSignaturePending' = 'CompletionSignaturePending',
  'Finished' = 'Finished'
}

export enum AttachmentCategoryEntityType {
  'TreatmentCase' = 'TreatmentCase',
  'MedicalExamination' = 'MedicalExamination'
}

export enum ConflictSeverity {
  'Major' = 'Major',
  'Minor' = 'Minor',
  'Regular' = 'Regular'
}

export enum CorrectionType {
  'All' = 'All',
  'OnlyCorrected' = 'OnlyCorrected',
  'OnlyNonCorrected' = 'OnlyNonCorrected'
}

export enum CustomDocumentAction {
  'None' = 'None',
  'ExportToWord' = 'ExportToWord',
  'ExportToPdf' = 'ExportToPdf',
  'Preview' = 'Preview',
  'Print' = 'Print',
  'Sign' = 'Sign',
  'ExportToJpg' = 'ExportToJpg'
}

export enum DiagnosisStatus {
  'Created' = 'Created',
  'Approved' = 'Approved',
  'ApprovedDublicate' = 'ApprovedDublicate',
  'Rejected' = 'Rejected'
}

export enum DiagnosisType {
  'External' = 'External',
  'LocalInitial' = 'LocalInitial',
  'Local' = 'Local',
  'LocalFinal' = 'LocalFinal'
}

export enum ExternalDeviceType {
  'Fiscal' = 'Fiscal',
  'CreditCard' = 'CreditCard'
}

export enum FieldType {
  'String' = 'String',
  'Text' = 'Text',
  'Boolean' = 'Boolean',
  'Date' = 'Date',
  'DateTime' = 'DateTime',
  'Number' = 'Number',
  'IntNumber' = 'IntNumber',
  'List' = 'List',
  'MultipleList' = 'MultipleList',
  'Tags' = 'Tags'
}

export enum FiscalReportType {
  'XReport' = 'XReport',
  'ZReport' = 'ZReport',
  'StatusReport' = 'StatusReport'
}

export enum FiscalState {
  'NotRequired' = 'NotRequired',
  'Pending' = 'Pending',
  'Started' = 'Started',
  'Error' = 'Error',
  'Complete' = 'Complete'
}

export enum GenericExaminationResult {
  'Normal' = 'Normal',
  'IssueFound' = 'IssueFound',
  'NotSpecified' = 'NotSpecified',
  'Cito' = 'Cito'
}

export enum GetTreatmentCaseToc_TreatmentCaseScope {
  'Registration' = 'Registration',
  'MedicalRecord' = 'MedicalRecord'
}

export enum InvoiceStatus {
  'Created' = 'Created',
  'Paid' = 'Paid',
  'Locked' = 'Locked',
  'Cancelled' = 'Cancelled'
}

export enum ItemStatus {
  'Unspecified' = 'Unspecified',
  'Ok' = 'Ok',
  'Warn' = 'Warn',
  'Error' = 'Error'
}

export enum MedicalRecordType {
  'Unknown' = 'Unknown',
  'Ambulatory' = 'Ambulatory',
  'Sanatorium' = 'Sanatorium',
  'NoTreatment' = 'NoTreatment'
}

export enum MedicineRelease_ReleaseActionType {
  'Release' = 'Release',
  'PatientMissed' = 'PatientMissed'
}

export enum NotificationSeverityLevel {
  'Critical' = 'Critical',
  'Major' = 'Major',
  'Normal' = 'Normal'
}

export enum NutritionExemptionType {
  'Exclusion' = 'Exclusion',
  'Addition' = 'Addition'
}

export enum OrganizationUnitType {
  'ExecutivePosition' = 'ExecutivePosition',
  'Department' = 'Department'
}

export enum PaymentKind {
  'PrepaymentFull' = 'PrepaymentFull',
  'Advance' = 'Advance',
  'FullPayment' = 'FullPayment'
}

export enum PrescriptionStatus {
  'Draft' = 'Draft',
  'Created' = 'Created',
  'Approved' = 'Approved',
  'Rejected' = 'Rejected',
  'Started' = 'Started',
  'Suspended' = 'Suspended',
  'Dispatched' = 'Dispatched',
  'PatientOmitted' = 'PatientOmitted',
  'MaterialTaken' = 'MaterialTaken',
  'Complete' = 'Complete',
  'Canceled' = 'Canceled'
}

export enum PrescriptionType {
  'Consultation' = 'Consultation',
  'Procedure' = 'Procedure',
  'LabTest' = 'LabTest',
  'InstrumentalProbe' = 'InstrumentalProbe',
  'TradeGood' = 'TradeGood',
  'Medicine' = 'Medicine'
}
export type ProblemDetailsWithAdditionalProperties = ProblemDetails & { [additionalProperties: string]: any | null };
export enum ProcedureParameterType {
  'String' = 'String',
  'Integer' = 'Integer',
  'Decimal' = 'Decimal',
  'List' = 'List'
}

export enum ReservationStatus {
  'None' = 'None',
  'Reserved' = 'Reserved',
  'Cancelled' = 'Cancelled',
  'NoShow' = 'NoShow',
  'InHouse' = 'InHouse',
  'CheckOut' = 'CheckOut',
  'TemporaryDeparture' = 'TemporaryDeparture'
}

export enum ScheduleItemSource {
  'Manual' = 'Manual',
  'Auto' = 'Auto',
  'SelfMobile' = 'SelfMobile',
  'Undispatched' = 'Undispatched'
}

export enum ScheduleItemStatus {
  'New' = 'New',
  'Started' = 'Started',
  'Finished' = 'Finished',
  'PatientOmitted' = 'PatientOmitted'
}

export enum ScheduleItemType {
  'Reserve' = 'Reserve',
  'Appointment' = 'Appointment'
}

export enum ServiceItemPermissionMask {
  'Prescribe' = 'Prescribe',
  'Dispatch' = 'Dispatch',
  'PrescribeWithAutoApprove' = 'PrescribeWithAutoApprove',
  'Perform' = 'Perform',
  'Start' = 'Start',
  'All' = 'All'
}

export enum ServiceItemType {
  'Consultation' = 'Consultation',
  'Procedure' = 'Procedure',
  'LabTest' = 'LabTest',
  'InstrumentalProbe' = 'InstrumentalProbe',
  'TreatmentAction' = 'TreatmentAction',
  'TradeGood' = 'TradeGood',
  'Medicine' = 'Medicine'
}

export enum ServiceTeamRole {
  'Initiator' = 'Initiator',
  'MainReleaser' = 'MainReleaser',
  'Assistant' = 'Assistant',
  'BiomaterialTaker' = 'BiomaterialTaker'
}

export enum Sex {
  'Male' = 'Male',
  'Female' = 'Female'
}

export enum SignerRole {
  'Organization' = 'Organization',
  'Author' = 'Author'
}

export enum StandardRole {
  'Doctor' = 'Doctor',
  'WardNurse' = 'WardNurse',
  'Consultant' = 'Consultant'
}

export enum TransactionStatus {
  'Tentative' = 'Tentative',
  'Scheduled' = 'Scheduled',
  'Posted' = 'Posted'
}

export enum TreatmentCaseStatus {
  'New' = 'New',
  'NoTreatment' = 'NoTreatment',
  'Open' = 'Open',
  'Closed' = 'Closed'
}

export enum TreatmentDurationSchema {
  'Day' = 'Day',
  'Night' = 'Night'
}

export enum TreatmentProgramType {
  'SanatoriumProgram' = 'SanatoriumProgram',
  'TreatmentProgram' = 'TreatmentProgram',
  'ProfCheck' = 'ProfCheck'
}
