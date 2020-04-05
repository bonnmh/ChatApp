import {StackActions, useNavigation} from '@react-navigation/native';

let _container;

// const navigation = useNavigation();

function setContainer(container) {
  _container = container;
}

// function reset(routeName, params, key) {
//   _container.dispatch(
//     StackActions.reset({
//       index: 0,
//       actions: [
//         NavigationActions.navigate({
//           type: 'Navigation/NAVIGATE',
//           routeName,
//           params,
//           key,
//         }),
//       ],
//     }),
//   );
// }

// function goBack() {
//   _container.dispatch(NavigationActions.back());
// }

// function navigate(routeName, params, key) {
//   if (_container) {
//     _container.dispatch(
//       NavigationActions.navigate({
//         type: 'Navigation/NAVIGATE',
//         routeName,
//         params,
//         key,
//       }),
//     );
//   }
// }

// function navigateDeep(actions) {
//   _container.dispatch(
//     actions.reduceRight(
//       (prevAction, action) =>
//         NavigationActions.navigate({
//           type: 'Navigation/NAVIGATE',
//           routeName: action.routeName,
//           params: action.params,
//           action: prevAction,
//         }),
//       undefined,
//     ),
//   );
// }

function getCurrentRoute() {
  if (!_container || !_container.state.nav) {
    return null;
  }
  const findCurrentRoute = (navState) => {
    if (navState.index !== undefined) {
      return findCurrentRoute(navState.routes[navState.index]);
    }

    return navState;
  };

  return findCurrentRoute(_container.state.nav);
}

function replace(routeName, params, key) {
  if (_container) {
    _container.dispatch(
      StackActions.replace({
        type: 'Navigation/REPLACE',
        routeName,
        params,
        key,
      }),
    );
  }
}

function push(routeName, params, key) {
  // const {routeName: currentRouteName} = getCurrentRoute();
  // if (routeName === currentRouteName) return;
  if (_container) {
    _container.dispatch(
      StackActions.push({
        type: 'Navigation/PUSH',
        routeName,
        params,
        key,
      }),
    );
  }
}
export const _push = (name, params = {}, key) => {
  if (!name) {
    throw new Error('Tried to create custom push method without a componentId');
  }
  if (_container) {
    _container.dispatch(
      StackActions.push(name, {
        type: 'Navigation/PUSH',
        params,
        key,
      }),
    );
  }
};
// export const _p = (name, params = {}) => {
//   navigation.push(name, {
//     params,
//   });
// };
// eslint-disable-next-line

export const NavigatorService = {
  setContainer,
  // navigateDeep,
  // navigate,
  // reset,
  // goBack,
  getCurrentRoute,
  replace,
  push,
  _push,
};
