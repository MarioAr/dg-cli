part of '[$file_name]_connector.dart';

class _[$feature]ViewModel extends Vm {
  ..props;

  _[$feature]ViewModel({
    ..props,
  }) : super(equals: [..props]);
}

class _[$feature]ViewModelFactory extends AppFactory<[$feature]Connector, _[$feature]ViewModel> {
  _[$feature]ViewModelFactory(super.connector);

  @override
  _[$feature]ViewModel fromStore() => _[$feature]ViewModel(
    ..props,
  );
}