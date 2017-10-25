angular.module('todo',[])

	.controller('todoCtrl',['$scope',function($scope){

		// 添加任务
		/*
			1.获取到用户输入的任务名字
			2.准备一个存储任务列表的数组
			3.监听用户的回车事件
			4.将用户输入的任务名字添加到任务列表中
			5.利用ng-repeat指令将任务列表展现到页面中

		 */
			
		// 任务列表数组
		$scope.taskList = [];

		$scope.addTask = function(event){

			// 判断用户当前是否按了回车键 并且输入的内容不能为空
			if(event.keyCode == 13 && $scope.task){

				// 向任务列表中添加任务
				$scope.taskList.push({
					name:$scope.task,
					isCompleted:false // 任务是否完成的状态
				});

				// 清空文本框的值
				$scope.task = "";

			}

		}

		/*
			删除任务

			1.给删除按钮添加点击事件
			2.将要删除的任务传递到事件处理函数中
			3.从数组中将数据删除

		 */

		$scope.deleteTask = function(task){

			$scope.taskList.splice($scope.taskList.indexOf(task),1);

		}

		/*
			计算未完成任务的数量

		 */
		
		$scope.unCompletedTaskNum = function(){

			return $scope.taskList.filter( item => !item.isCompleted ).length;

		}










		$scope.abc = ()=>{

		}

		$scope.abc = function(){
			return !item.isCompleted
		}



	}]);