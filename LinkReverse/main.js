/* 
  链表的逆转（标准方法）-浙大数据结构练习，新增一个头结点 * 
  *->1->2->3->4->5
  前三个元素进行逆转
  *->3->2->1->4->5
 */
// 传入头指针，指定 K 个链表元素的逆转
function linkReverse(head, k) {
	// new 表示当前逆转过的元素
	let new = head->next;
	// old 表示还没逆转的元素
	let old = new->next;
	// count 表示逆转的个数
	while(count < k) {
		// temp 表示old的下一个元素
		temp = old->next;
		old->next = new;
		new = old;
		old = temp;
		count++;
	}
	// 将剩下不逆序的元素连接起来
	head->next->next = old;
	// 返回调整后的头结点
	return new;
}