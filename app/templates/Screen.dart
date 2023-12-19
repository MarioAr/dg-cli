import 'package:flutter/material.dart';

class [$feature]Screen extends StatelessWidget {
  const [$feature]Screen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: const Text('Hello, world!'),
      bottomNavigationBar: BottomAppBar(
        child: ElevatedButton(
          onPressed: () {},
          child: const Text('Press me')
        )
      ),
    );
  }
}