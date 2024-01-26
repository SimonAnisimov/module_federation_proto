import { AccountingService, AccountInfoModel } from '@shared/types';
import { reactive } from 'vue';

interface State {
  list: AccountInfoModel[]
}

export const useAccountModel = () => {
  const state = reactive<State>({
    list: []
  });

  const getSearchList = async () => {
    const { results } = await AccountingService.searchAccounts();
    state.list = results;
  }

  return {
    state,
    getSearchList
  }
}