from votacao.models import Questao, Opcao
from django.db.models import Max, QuerySet
from django.utils import timezone
import datetime

# exec(open('test_db.py', encoding='utf-8').read()) usar este comando devido ao enconding do ficheiro


# a)
def show_all_questions():
    print("\nLista de todas as questões:")
    questions = Questao.objects.all()
    for q in questions:
        print(f"- {q.questao_texto}")


# b)
def show_options_gostas():
    print("\nOpções das questões que começam com 'Gostas de...':")
    questions = Questao.objects.filter(questao_texto__startswith="Gostas de")
    if questions.exists():
        for question in questions:
            print(f"\nQuestão: {question.questao_texto}")
            if question.opcao_set.exists():
                for opt in question.opcao_set.all():
                    print(f"- {opt.opcao_texto} (Votos: {opt.votos})")
            else:
                print("- Nenhuma opção encontrada")
    else:
        print("Nenhuma questão encontrada começada com 'Gostas de...'")


# c)
def show_options_gostas_above_2():
    print("\nOpções com mais de 2 votos das questões que começam com 'Gostas de...':")
    questions = Questao.objects.filter(questao_texto__startswith="Gostas de")
    if questions.exists():
        for question in questions:
            print(f"\nQuestão: {question.questao_texto}")
            options = question.opcao_set.filter(votos__gt=2)
            if options.exists():
                for opt in options:
                    print(f"- {opt.opcao_texto} (Votos: {opt.votos})")
            else:
                print("- Nenhuma opção com mais de 2 votos")
    else:
        print("Nenhuma questão encontrada começada com 'Gostas de...'")


# d)
def show_recent_questions():
    three_years_ago = timezone.now() - datetime.timedelta(days=3 * 365)
    print("\nQuestões publicadas nos últimos 3 anos:")
    questions = Questao.objects.filter(pub_data__gte=three_years_ago)
    for q in questions:
        print(f"- {q.questao_texto} (Data: {q.pub_data.date()})")


# e)
def show_total_votes():
    total = sum(op.votos for op in Opcao.objects.all())
    print(f"\nNúmero total de votos na base de dados: {total}")


# f)
def show_most_voted_options():
    print("\nQuestões e a sua opção mais votada:")
    questions = Questao.objects.all()
    for q in questions:
        most_votes: int = q.opcao_set.aggregate(Max("votos"))["votos__max"]
        most_voted: QuerySet[Opcao] = q.opcao_set.filter(votos=most_votes)
        print(f"Questão: {q.questao_texto}")
        if most_votes is None:
            print("Nenhuma opção\n")
        elif most_votes > 0:
            print(
                f"{"Opção mais votada" if most_voted.count() == 1 else "Opções mais votadas"} "
                f"({most_votes} voto{"s" if most_votes > 1 else ""}{" cada" if most_voted.count() else ""}): "
                f"{", ".join(o.opcao_texto for o in most_voted)}\n"
            )
        else:
            print("Nenhuma opção votada\n")


show_all_questions()
show_options_gostas()
show_options_gostas_above_2()
show_recent_questions()
show_total_votes()
show_most_voted_options()
