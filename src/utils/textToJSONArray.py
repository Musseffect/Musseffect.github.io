import json
import argparse

#!!!group name
# url  | name  |  tag1,tag2,tag3

def convert(srcFilename,dstFilename):
    src = open(srcFilename,"r")
    dst = open(dstFilename,"w")
    srcLines = src.readlines()
    i = 0
    length = len(srcLines)
    dst.write("[\n")
    links = 0
    groups = 0
    i = 0
    currentGroup = "*"
    while i < length:
        line = srcLines[i].lstrip().rstrip('\n').rstrip().expandtabs(1)
        i+=1
        if(not line):
            continue
        if(line.startswith("!!!")):
            currentGroup = line.lstrip("!!!")
            if(groups!=0):
                dst.write("\n\t\t]\n},\n{\n")
            else:
                dst.write("{\n")
            dst.write("\t\"name\":%s,\n" % json.dumps(currentGroup, ensure_ascii=False).encode('utf8'))
            dst.write("\t\"items\":[\n")
            groups+=1
            links=0
            continue
        elif(groups==0):
            dst.write("{\n")
            dst.write("\t\"group\":\"%s\",\n" % "*")
            dst.write("\t\"items\":[\n")
            groups+=1
            links=0
        elif(links!=0):
            dst.write(",\n")
        dst.write("\t\t{\n")
        values = line.split('|')
        if(len(values)==0):
            continue
        links+=1
        values[0] = values[0].lstrip().rstrip()
        if(not values[0] and len(values)>1):
            values[0] = "https://www.google.com/search?q=" + values[0]
        elif(not values[0]):
            continue
        dst.write("\t\t\t\"href\":%s," % json.dumps(values[0], ensure_ascii=False).encode('utf8'))
        if(len(values)==1):
            dst.write("\n\t\t\t\"name\":%s," % json.dumps(values[0], ensure_ascii=False).encode('utf8'))
            dst.write("\n\t\t\t\"tags\":[]\n\t\t}")
            continue
        values[1] = values[1].lstrip().rstrip()
        dst.write("\n\t\t\t\"name\":%s," % json.dumps(values[1], ensure_ascii=False).encode('utf8'))
        if(len(values)==2):
            dst.write("\n\t\t\t\"tags\":[]\n\t\t}")
            continue
        tags = values[2]
        if(not tags):
            dst.write("\n\t\t\t\"tags\":[]\n\t\t}")
            continue
        tagList = tags.split(',')
        dst.write("\n\t\t\t\"tags\":[")
        tagLength = len(tagList)
        k = 0
        for x in tagList:
            dst.write("\"%s\"" % x.lstrip().rstrip())
            k+=1
            if(k<tagLength):
                dst.write(", ")
        dst.write("]\n\t\t}")
    if(groups!=0):
        dst.write("\n\t]\n}\n]")
    else:
        dst.write("\n]")
    """
    for x in srcLines:
        dst.write("\"")
        dst.write(x)
        dst.write("\"")
        i+=1
        if (i<length):
            dst.write(",\n")
            dst.write("\"\",\n")
    src.close()
    dst.close()
    """


parser = argparse.ArgumentParser(description='links to markdown JSON array')
parser.add_argument('src',metavar='src',help='source filename',type=str)
parser.add_argument('dst',metavar='dst',help='destination filename',type=str)
args = parser.parse_args()
convert(args.src,args.dst)