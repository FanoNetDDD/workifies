import 'package:equatable/equatable.dart';

enum TaskStatus { pending, inProgress, completed }
enum TaskPriority { low, medium, high, urgent }

class TaskModel extends Equatable {
  final String id;
  final String title;
  final String description;
  final TaskStatus status;
  final TaskPriority priority;
  final String assignedToId;
  final String assignedToName;
  final String createdById;
  final String createdByName;
  final String companyId;
  final DateTime? dueDate;
  final List<String> progressNotes;
  final DateTime createdAt;
  final DateTime updatedAt;

  const TaskModel({
    required this.id,
    required this.title,
    required this.description,
    required this.status,
    required this.priority,
    required this.assignedToId,
    required this.assignedToName,
    required this.createdById,
    required this.createdByName,
    required this.companyId,
    this.dueDate,
    this.progressNotes = const [],
    required this.createdAt,
    required this.updatedAt,
  });

  factory TaskModel.fromJson(Map<String, dynamic> json) {
    return TaskModel(
      id: json['id'] as String,
      title: json['title'] as String,
      description: json['description'] as String,
      status: TaskStatus.values.byName(json['status'] as String),
      priority: TaskPriority.values.byName(json['priority'] as String),
      assignedToId: json['assignedToId'] as String,
      assignedToName: json['assignedToName'] as String,
      createdById: json['createdById'] as String,
      createdByName: json['createdByName'] as String,
      companyId: json['companyId'] as String,
      dueDate: json['dueDate'] != null ? DateTime.parse(json['dueDate'] as String) : null,
      progressNotes: List<String>.from(json['progressNotes'] ?? []),
      createdAt: DateTime.parse(json['createdAt'] as String),
      updatedAt: DateTime.parse(json['updatedAt'] as String),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'status': status.name,
      'priority': priority.name,
      'assignedToId': assignedToId,
      'assignedToName': assignedToName,
      'createdById': createdById,
      'createdByName': createdByName,
      'companyId': companyId,
      'dueDate': dueDate?.toIso8601String(),
      'progressNotes': progressNotes,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt.toIso8601String(),
    };
  }

  TaskModel copyWith({
    String? id,
    String? title,
    String? description,
    TaskStatus? status,
    TaskPriority? priority,
    String? assignedToId,
    String? assignedToName,
    String? createdById,
    String? createdByName,
    String? companyId,
    DateTime? dueDate,
    List<String>? progressNotes,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return TaskModel(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      status: status ?? this.status,
      priority: priority ?? this.priority,
      assignedToId: assignedToId ?? this.assignedToId,
      assignedToName: assignedToName ?? this.assignedToName,
      createdById: createdById ?? this.createdById,
      createdByName: createdByName ?? this.createdByName,
      companyId: companyId ?? this.companyId,
      dueDate: dueDate ?? this.dueDate,
      progressNotes: progressNotes ?? this.progressNotes,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }

  @override
  List<Object?> get props => [
        id,
        title,
        description,
        status,
        priority,
        assignedToId,
        assignedToName,
        createdById,
        createdByName,
        companyId,
        dueDate,
        progressNotes,
        createdAt,
        updatedAt,
      ];
}