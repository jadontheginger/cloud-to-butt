walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bJohn Cena\b/g, "Potato salad");
	v = v.replace(/\bJohn cena\b/g, "Potato salad");
	v = v.replace(/\bjohn Cena\b/g, "potato salad");
	v = v.replace(/\bjohn cena\b/g, "potato salad");
	v = v.replace(/\bPotato Salad\b/g, "John Cena");
	v = v.replace(/\bPotato salad\b/g, "John Cena");
	v = v.replace(/\bpotato Salad\b/g, "John Cena");
	v = v.replace(/\bpotato salad\b/g, "John Cena");
	
	textNode.nodeValue = v;
}


