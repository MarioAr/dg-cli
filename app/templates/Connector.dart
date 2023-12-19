import 'package:async_redux/async_redux.dart';
import 'package:flutter/material.dart';
import 'package:punto_cash/constants.dart';
import 'package:punto_cash/domain/redux/app_state.dart';
import 'package:punto_cash/domain/redux/auth/register_username_action.dart';
import 'package:punto_cash/presentation/auth/biometry/biometry_check_screen.dart';
import 'package:punto_cash/util/extensions.dart';

part '[$file_name]_selector.dart';

class [$feature]Connector extends StatelessWidget {
  const BiometryCheckConnector({super.key});

  @override
  Widget build(BuildContext context) {
    return StoreConnector<AppState, _[$feature]ViewModel>(
      vm: () => _[$feature]ViewModelFactory(this),
      builder: (BuildContext context, _[$feature]ViewModel vm) => [$feature]Screen(
        ..props
      ),
    );
  }
}