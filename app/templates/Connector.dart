import 'package:async_redux/async_redux.dart';
import 'package:flutter/material.dart';

part '[$file_name]_selector.dart';

class [$feature]Connector extends StatelessWidget {
  const [$feature]Connector({super.key});

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